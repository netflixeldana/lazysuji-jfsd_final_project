package com.jfsd.finalAPI.service;

import com.jfsd.finalAPI.repository.ItemRepository;
import com.jfsd.finalAPI.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemServiceMySQL implements ItemService
{
    private final ItemRepository itemRepository;

    public ItemServiceMySQL(@Autowired ItemRepository itemRepository)
    {
        this.itemRepository = itemRepository;
    }

//    @Override
    public Item save(Item item)
    {
        return itemRepository.save(item);
    }

    @Override
    public void delete(int itemId)
    {
        itemRepository.deleteById(itemId);
    }

    @Override
    public List<Item> all()
    {
        List<Item> result = new ArrayList<>();
        itemRepository.findAll().forEach(result::add);
        return result;
    }

    @Override
    public Item findById(int itemId)
    {
        Item item = itemRepository.findById(itemId).orElseThrow(() -> new IllegalStateException("Item not found"));
        return item;
    }

}
