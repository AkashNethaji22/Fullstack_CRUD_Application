package com.akash.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.akash.model.User;

@Repository
public interface userrepo extends JpaRepository<User, Integer>{

}
