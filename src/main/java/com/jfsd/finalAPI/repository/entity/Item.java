package com.jfsd.finalAPI.repository.entity;

import com.jfsd.finalAPI.controller.dto.ItemDto;

import javax.persistence.*;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String name;
    private String description;
    private String imageUrl;

//    public Item(ItemDto itemDto)
//    {
//        this.name = itemDto.getName();
//        this.description = itemDto.getDescription();
//        this.imageUrl = itemDto.getImageUrl();
//    }

    public Item(Integer id, String name, String description, String imageUrl)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public Item()
    {
    }

    public Integer getId()
    {
        return id;
    }

    public void setId( Integer id )
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName( String name )
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription( String description )
    {
        this.description = description;
    }

    public String getImageUrl()
    {
        return imageUrl;
    }

    public void setImageUrl( String imageUrl )
    {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString()
    {
        return "Item{" +
                "id = " + id +
                ", name = '" + name + '\'' +
                ", description = '" + description + '\'' +
                ", imageUrl = '" + imageUrl + '\'' +
                '}';
    }
}
