package com.putacollartoyourchild.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.putacollartoyourchild.app.entity.service.IAppUserService;
import com.putacollartoyourchild.entity.model.AppUser;

@RestController
public class AppUserController {
	
	@Autowired
	IAppUserService appUserService;
	
	@GetMapping("/appuser")
	public List<AppUser> getAll() {
		return appUserService.getAll();
	}

}
