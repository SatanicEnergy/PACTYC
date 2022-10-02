package com.gamelibrary.app.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.gamelibrary.app.entity.model.VideoGame;

public interface IAppUserDao extends CrudRepository<VideoGame, Long>{

}
