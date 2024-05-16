package com.codewithdurgesh.blog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithdurgesh.blog.entities.User;

public interface UserRepo extends JpaRepository<User,Integer>{
    User findByEmailAndPassword(String email,String Password);
    User findByEmail(String email);
}