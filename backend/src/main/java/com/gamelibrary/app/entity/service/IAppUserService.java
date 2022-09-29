package com.gamelibrary.app.entity.service;

import java.util.List;

import com.gamelibrary.app.entity.model.AppUser;

public interface IAppUserService {
	public List<AppUser> getAll();
	public AppUser getOne(long id);
	public void insert(AppUser appUser);
}
