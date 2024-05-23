package com.healthbridge.user.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.healthbridge.user.entities.User;

public interface UserRepo extends JpaRepository<User,Integer>{
    User findByEmailAndPassword(String email,String Password);
    User findByEmail(String email);
}
