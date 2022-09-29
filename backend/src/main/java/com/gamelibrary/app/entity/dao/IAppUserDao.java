package com.gamelibrary.app.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.gamelibrary.app.entity.model.AppUser;

public interface IAppUserDao extends CrudRepository<AppUser, Long>{

}
