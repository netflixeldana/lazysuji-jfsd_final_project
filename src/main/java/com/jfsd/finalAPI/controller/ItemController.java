package com.jfsd.finalAPI.controller;

import com.jfsd.finalAPI.controller.dto.ItemDto;
import com.jfsd.finalAPI.repository.ItemRepository;
import com.jfsd.finalAPI.repository.entity.Item;
import com.jfsd.finalAPI.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/item")
public class ItemController{
//    final ItemRepository itemRepository;
    final ItemService itemService;

//    public ItemController(@Autowired ItemRepository itemRepository )
//    {
//        this.itemRepository = itemRepository;
//    }

    public ItemController(@Autowired ItemService itemService)
    {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Item> getItems(){
        return itemService.all();
    }

    @CrossOrigin
    @PostMapping
    public Item save(@RequestBody Item item)
    {
        return itemService.save(item);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Item findItemById(@PathVariable Integer id){
        return itemService.findById(id);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public Item update(@RequestBody Item item, @PathVariable Integer id)
    {
        Item item2 = itemService.findById(id);
        item2.setName(item.getName());
        item2.setDescription(item.getDescription());
        item2.setImageUrl(item.getImageUrl());
        return itemService.save(item2);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id)
    {
        itemService.delete(id);
    }

}
