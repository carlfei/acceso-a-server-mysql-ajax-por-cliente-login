package com.sql2.controller;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sql2.repository.TiendaRepositorio;
import com.sql2.service.TiendaServicio;

import com.sql2.domain.Tienda;

@RestController
public class DataBaseController {

	@Autowired
	TiendaRepositorio tiendaRepositorio;

	@Autowired
	TiendaServicio tiendaServicio;

	@PostMapping(value = "findbyid/search")
	Tienda getCoches(@Valid @RequestBody Tienda search) {

		return tiendaRepositorio.findById(Integer.parseInt(search.getNumero())).get();
	}

	@PostMapping(value = "deletebyid/id")
	public String deleteId(@Valid @RequestBody Tienda id) {

		try {
			tiendaRepositorio.deleteById(Integer.parseInt(id.getNumero()));

			return "OK";
		} catch (Exception e) {

			return "FAIL";
		}

	}

	@RequestMapping(value = "deletebycalle/calle", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteByCalle(@Valid @RequestBody Tienda calle) {

		if (!tiendaServicio.deleteAllCalleWithName(calle.getCalle()))
			return new ResponseEntity<Void>(HttpStatus.BAD_GATEWAY);

		return new ResponseEntity<Void>(HttpStatus.OK);

	}

	@RequestMapping(value = "show", method = RequestMethod.POST)
	public List<Tienda> showDataBase() {

		return tiendaRepositorio.findAll();

	}

	@PostMapping(value = "insertall/insert")
	Tienda meteDentro(@Valid @RequestBody Tienda insert) {

		Tienda seterTienda = new Tienda();

		seterTienda.setCalle(insert.getCalle());
		seterTienda.setDistrito(insert.getDistrito());
		seterTienda.setNumero(insert.getNumero());
		seterTienda.setCp(insert.getCp());

		return tiendaRepositorio.saveAndFlush(seterTienda);

	}

	@PostMapping(value = "findbycalle/calle")
	ResponseEntity<Collection<Tienda>> findCalle(@Valid @RequestBody Tienda calle) {

		Collection<Tienda> tiendaCollection = tiendaRepositorio.findByTiendaWithName((calle.getCalle()));

		return new ResponseEntity<Collection<Tienda>>(tiendaCollection, HttpStatus.OK);

	}

	@PostMapping(value = "/updateCalleById")
	Tienda updateCalle(@Valid @RequestBody Tienda update) {

		if (!tiendaServicio.updateTienda(update.getCalle(), Integer.parseInt(update.getNumero())))
			return tiendaRepositorio.findById(Integer.parseInt(update.getNumero())).get();

		return tiendaRepositorio.findById(Integer.parseInt(update.getNumero())).get();

	}

}
