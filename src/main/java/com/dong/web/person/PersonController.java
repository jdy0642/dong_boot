package com.dong.web.person;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dong.web.util.Printer;

@RestController
@CrossOrigin(origins = "http://localhost:8082")

public class PersonController {
	@Autowired 	private PersonRepository personRepository;
	@Autowired	private Printer p;
	@Autowired ModelMapper modelMapper;
	@Bean public ModelMapper modelMapper() {return new ModelMapper();}
	
	@RequestMapping("/")
	public String index() {
		Iterable<Person> all = personRepository.findAll();
		StringBuilder sb = new StringBuilder();
		all.forEach(p -> sb.append(p.getName()+" "));
		return sb.toString();
	}

	@PostMapping("/login")
	public HashMap<String, Object> login(@RequestBody Person person) {
		HashMap<String, Object> map = new HashMap<>();
		p.accept("로그인 진입");
		p.accept(String.format("id: %s", person.getUserid()));
		p.accept(String.format("pwd: %s", person.getPasswd()));
		person = personRepository.findByUseridAndPasswd
					(person.getUserid(), person.getPasswd());
		if(person!= null) {
			p.accept("로그인 성공");
			map.put("result","SUCCESS");
			map.put("person",person);
		}else {
			p.accept("로그인 실패");
			map.put("result","FAIL");
			map.put("person",person);
		}
		return map;
	}
	
	@PostMapping("/join")
	public HashMap<String, Object> join(@RequestBody Person person) {
		HashMap<String, Object> map = new HashMap<>();
		
		p.accept(String.format("bday: %s", person.getBirthday()));
		person = personRepository.save(person);
		
		if(person!= null) {
			p.accept("조인 성공");
			map.put("result","SUCCESS");
			map.put("person",person);
		}else {
			p.accept("조인 실패");
			map.put("result","FAIL");
			map.put("person",person);
		}
		return map;
	}
	@DeleteMapping("/withdrawal/{userid}")
	public void withdrawal(@PathVariable String userid) {
		p.accept("회탈 진입");
		personRepository
		.delete(personRepository
				.findByUserid(userid));
	}
	@PutMapping("/update/{userid}")
	public void update(@RequestBody Person person, @PathVariable String userid) {
		p.accept("수정 진입");
		person = personRepository.save(person);
	}
	@GetMapping("/students")
	public Stream<PersonDTO> list() {
		p.accept("가져오기 진입");
//		Iterable<Person> entities=personRepository.findByRole("student");
		Iterable<Person> entities = personRepository.findAll();
		List<PersonDTO> list = new ArrayList<>();
		for(Person p : entities) {
			PersonDTO dto = modelMapper.map(p, PersonDTO.class);
				list.add(dto);
		}
		return list.stream()
				.filter(role-> role
					.getRole().equals("student"));
	}
}