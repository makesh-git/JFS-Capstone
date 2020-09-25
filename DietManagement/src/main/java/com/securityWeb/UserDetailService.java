package com.securityWeb;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.model.common.LoginCredentials;
import com.repository.common.LoginCredentialsRepo;


@Service
public class UserDetailService implements UserDetailsService {

	@Autowired
	LoginCredentialsRepo logRepo;
	CurrentLoggedUser user = new CurrentLoggedUser();
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub

		if(!username.equals("null")) {
			LoginCredentials login = logRepo.findByUserid(username);
			user.setCurrentUser(login);
			System.out.println(login);
//			if(login == null) {
//				System.out.println("NOT FOIND");
//				throw new UsernameNotFoundException("no Sorry not found");
//			}
			return new UserPrincipal(login);
		}
		else {
			return null;
		}

		
	}

}
