package com.gamelibrary.app.controllers;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamelibrary.app.entity.model.VideoGame;
import com.gamelibrary.app.entity.service.IAppUserService;

@RestController
@CrossOrigin(origins = "*")
public class AppUserController {
	
	@Autowired
	IAppUserService appUserService;

	@GetMapping("/videogames")
	public List<VideoGame> getAll() {
		return appUserService.getAll();
	}
	
	@PostMapping("/videogames")
	public void insert(VideoGame appUser) {
		appUserService.insert(appUser);
	}
	
	@DeleteMapping("/videogames/{id}")
	public void delete(@PathVariable(value="id") long id) {
		appUserService.delete(id);
	}
	@PutMapping("videogames/{id}")
	public void put(VideoGame videogame, @PathVariable(value="id") long id) {
		appUserService.put(videogame, id);
	}
}
