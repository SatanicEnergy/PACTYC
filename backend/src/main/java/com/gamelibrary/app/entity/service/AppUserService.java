package com.gamelibrary.app.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamelibrary.app.entity.dao.IAppUserDao;
import com.gamelibrary.app.entity.model.VideoGame;

@Service
public class AppUserService implements IAppUserService{
	
	@Autowired
	IAppUserDao appUserDao;

	@Override
	public List<VideoGame> getAll() {
		return (List<VideoGame>) appUserDao.findAll();
	}

	@Override
	public VideoGame getOne(long id) {
		return appUserDao.findById(id).get();
	}

	@Override
	public void insert(VideoGame appUser) {
		appUserDao.save(appUser);
	}
	@Override
	public void	delete(long id) {
		appUserDao.deleteById(id);
	}
	@Override
	public void put(VideoGame videogame, long id) {
		appUserDao.findById(id).ifPresent((j) -> {
			videogame.setId(id);
			appUserDao.save(videogame);
		});
	}

}
