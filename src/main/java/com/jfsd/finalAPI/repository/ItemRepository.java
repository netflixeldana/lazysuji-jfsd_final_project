package com.jfsd.finalAPI.repository;

import com.jfsd.finalAPI.repository.entity.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {
}
