package com.gamelibrary.app.controllers;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamelibrary.app.entity.model.AppUser;
import com.gamelibrary.app.entity.service.IAppUserService;

@RestController
@CrossOrigin(origins = "http://localost:8100")
public class AppUserController {
	
	@Autowired
	IAppUserService appUserService;

	@GetMapping("/videogames")
	public List<AppUser> getAll() {
		return appUserService.getAll();
	}
	
	@PostMapping("/videogames")
	public void insert(AppUser appUser) {
		appUserService.insert(appUser);
	}
	
	@DeleteMapping("/videogames/{id}")
	public void delete(@PathParam(value="id") long id) {
		
	}
}
