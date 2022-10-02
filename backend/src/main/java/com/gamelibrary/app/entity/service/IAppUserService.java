package com.gamelibrary.app.entity.service;

import java.util.List;

import com.gamelibrary.app.entity.model.VideoGame;

public interface IAppUserService {
	public List<VideoGame> getAll();
	public VideoGame getOne(long id);
	public void insert(VideoGame appUser);
	public void delete(long id);
	public void put(VideoGame videogame, long id);
}
