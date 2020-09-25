package com.securityWeb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration
@EnableWebSecurity
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService userDetailsService;

	@Bean
	public AuthenticationProvider authProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(userDetailsService);
		provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
		return provider;
	}

	@Override 
	protected void configure(HttpSecurity http) throws Exception {
		http
		.cors();
		http
		.csrf().disable()
		.authorizeRequests().antMatchers("/h2-console/**").permitAll()
		.and()
		.authorizeRequests().antMatchers("/getListOfBatch","/availableGroupData").permitAll()
		.and()
		.authorizeRequests().antMatchers(HttpMethod.POST, "/addChallenger").permitAll()
		.and()
		.authorizeRequests().antMatchers(HttpMethod.GET, "/login/**").permitAll()
		.and()
		.authorizeRequests().antMatchers(HttpMethod.GET, "/downloadFile/**").permitAll()
		.and()
		.authorizeRequests().antMatchers("/**").fullyAuthenticated()
		.anyRequest().authenticated()
		.and()
		.logout().invalidateHttpSession(true)
		.clearAuthentication(true)
		.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
		.logoutSuccessUrl("/login").permitAll();
		http.headers().frameOptions().disable();
		http.httpBasic();
	
		//super.configure(http);
	}



}













//@Configuration
//@EnableWebSecurity
//public class AppSecurityConfig extends WebSecurityConfigurerAdapter{
//	
//	@Autowired
//	private UserDetailsService userDetailsService;
//	
//
//	@Bean
//	public AuthenticationProvider authProvider() {
//		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//		provider.setUserDetailsService(userDetailsService);
//		provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
//		return provider;
//	}
//
//
//	
//	
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//
//		http.csrf().disable()
//		.authorizeRequests().antMatchers("/login").permitAll()
//		.and().authorizeRequests().antMatchers("/h2-console/**").permitAll()
//		.and()
//		.authorizeRequests().antMatchers("/register/**").permitAll()	
//		.and()
//		.authorizeRequests().antMatchers("/registerSubmit/**").permitAll()
//		.anyRequest().authenticated()
//	    .and().
//	    formLogin().failureUrl("/fail")
//	    .loginPage("/login").permitAll()
//	    .and().
//	    logout().invalidateHttpSession(true).clearAuthentication(true)
//	    .logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/logout-success")	.permitAll();
//		http.headers().frameOptions().disable();
//	}
	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		// TODO Auto-generated method stub
////		
//		
//		http
//		.cors();
//		http
//		.csrf().disable()
//		.authorizeRequests().antMatchers("/h2-console/**").permitAll()
//		.and()
//		.authorizeRequests().antMatchers("/getListOfBatch","/availableGroupData").permitAll()
//		.and()
//		.authorizeRequests().antMatchers(HttpMethod.POST, "/addChallenger").permitAll()
//		.and()
//		.authorizeRequests().antMatchers(HttpMethod.GET, "/challenger/download/**").permitAll()
//		.and()
//		.authorizeRequests().antMatchers("/**").fullyAuthenticated()
//		.anyRequest().authenticated()
//		.and()
//		.logout().invalidateHttpSession(true)
//		.clearAuthentication(true)
//		.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//		.logoutSuccessUrl("/login").permitAll();
//		http.headers().frameOptions().disable();
//		http.httpBasic();
//	
//		super.configure(http);
//		
//	}
	
	
	

//}
