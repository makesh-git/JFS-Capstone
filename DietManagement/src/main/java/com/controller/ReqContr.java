package com.controller;


import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.engine.jdbc.batch.spi.Batch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.ls.LSInput;

import com.model.admin.AdminInbox;
import com.model.admin.AdminOlderPost;
import com.model.admin.AdminOutbox;
import com.model.admin.AdminViewPost;
import com.model.admin.RegUsers;
import com.model.admin.Users;
import com.model.common.Batches;
import com.model.common.FileUpload;
import com.model.common.Groups;
import com.model.common.LoginCredentials;
import com.model.common.MotiBatch;
import com.model.common.Motivator;
import com.model.common.WeeklyDiet;
import com.model.common.assignMoti;
import com.model.motivator.MotiInbox;
import com.model.motivator.MotiOlderPost;
import com.model.motivator.MotiOutbox;
import com.model.motivator.MotiViewPost;
import com.model.motivator.MotivatingBatches;
import com.model.user.UserDailyLog;
import com.model.user.UserInbox;
import com.model.user.UserMonthlyMeas;
import com.model.user.UserOlderPost;
import com.model.user.UserOutbox;
import com.model.user.UserViewPost;
import com.repository.admin.AdminInboxRepo;
import com.repository.admin.AdminOlderPostRepo;
import com.repository.admin.AdminOutboxRepo;
import com.repository.admin.AdminViewPostReop;
import com.repository.admin.RegUsersRepo;
import com.repository.admin.UsersRepo;
import com.repository.common.BatchRepo;
import com.repository.common.FileUploadRepo;
import com.repository.common.GroupRepo;
import com.repository.common.LoginCredentialsRepo;
import com.repository.common.MotiBatchRepo;
import com.repository.common.MotivatorRepo;
import com.repository.common.WeeklyDietRepo;
import com.repository.motivator.MotiInboxRepo;
import com.repository.motivator.MotiOlderPostRepo;
import com.repository.motivator.MotiOutboxRepo;
import com.repository.motivator.MotiViewPostRepo;
import com.repository.user.UserDailyLogRepo;
import com.repository.user.UserInboxRepo;
import com.repository.user.UserMonthlyMeasRepo;
import com.repository.user.UserOlderPostRepo;
import com.repository.user.UserOutboxRepo;
import com.repository.user.UserViewPostRepo;
import com.securityWeb.CurrentLoggedUser;
import com.service.DateAndTimeFinder;

@RestController
@ResponseBody
@CrossOrigin("http://localhost:4200")
public class ReqContr 
{
	@Autowired
	LoginCredentialsRepo logRepo;
	
	
	@Autowired
	BatchRepo batchRepo;
	@Autowired
	GroupRepo groupRepo;
	@Autowired
	UsersRepo userRepo;
	@Autowired
	RegUsersRepo regRepo;
	@Autowired
	MotivatorRepo motiRepo;
	@Autowired
	MotiBatchRepo mbRepo;
	
	//Admin
	@Autowired
	AdminOutboxRepo aoRepo;
	@Autowired
	AdminInboxRepo aiRepo;
	@Autowired
	AdminOlderPostRepo aopRepo;
	@Autowired
	AdminViewPostReop avpRepo;
	
	
	//Motivator
	@Autowired
	MotiInboxRepo miRepo;
	@Autowired
	MotiOutboxRepo moRepo;
	@Autowired
	MotiViewPostRepo mvpRepo;
	@Autowired
	MotiOlderPostRepo mopRepo;
	
	//User
	@Autowired
	UserInboxRepo uiRepo;
	@Autowired
	UserOutboxRepo uoRepo;
	@Autowired
	UserViewPostRepo uvpRepo;
	@Autowired
	UserDailyLogRepo udlRepo;
	@Autowired
	UserMonthlyMeasRepo ummRepo;
	@Autowired
	UserOlderPostRepo uopRepo;
	@Autowired
	FileUploadRepo fupRepo;
	@Autowired
	WeeklyDietRepo wdRepo;
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
//	@RequestMapping("/login")
//	public void LogiMeth() {
//		System.out.println("Came to login method !");
//	}
	
	@GetMapping("/login")
	public LoginCredentials dd() {
		
		System.out.println("Came to login ggmethod !");
		CurrentLoggedUser c = new CurrentLoggedUser();
		System.out.println("SEND DE"+c.getCurrentUser());
		return logRepo.findByUserid(c.getCurrentUser().getUserid());
	}
	
//	@GetMapping("/getOneUsers/{id}")
//	public Optional<Users> getOneUsers(@PathVariable String id)
//	{
//		return userRepo.findById(id);
//	}
//	@PostMapping("/login")
//	public void gg() {
//		System.out.println("Came to login ppmethod !");
//	}
//	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	@GetMapping("/viewUsers")
	public List<Users> viewUsers()
	{
		
		return (List<Users>) userRepo.findAll();
	}
	@GetMapping("/getOneUsers/{id}")
	public Optional<Users> getOneUsers(@PathVariable String id)
	{
		return userRepo.findById(id);
	}
	
	@PostMapping("/modifyUser")
	public void modifyUser(@RequestBody Users user)
	{
		userRepo.save(user);
	}
	@DeleteMapping("/removeUser/{id}")
	public void removeUser(@PathVariable String id)
	{
		userRepo.deleteById(id);
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//  Motivators..
	@GetMapping("/viewMoti")
	public List<Motivator> viewMoti(){
		return (List<Motivator>) motiRepo.findAll();
	}
	
	@GetMapping("/getOneMoti/{id}")
	public Optional<Motivator> getOneMoti(@PathVariable String id)
	{
		return motiRepo.findById(id);	
	}
	@PostMapping("/modifyMoti")
	public void modifyMoti(@RequestBody Motivator moti)
	{
		motiRepo.save(moti);
	}
	@DeleteMapping("/removeMoti/{id}")
	public void removeMoti(@PathVariable String id)
	{
		List<MotiBatch> mb = mbRepo.findByMotiid(id);
		mbRepo.deleteAll(mb);
		motiRepo.deleteById(id); 
	}
	
	@PostMapping("/addUser")
	public void addUser(@RequestBody Users u) {
		DateAndTimeFinder dtm = new DateAndTimeFinder();
		u.setUserid(u.getEmail());
		//Genarte PassWOrd, Refid - Save in log details..
		u.setRegDate(dtm.getCurrentDateAndTime());
		userRepo.save(u);
		
	}
	@PostMapping("/addMotivator")
	public void addMotivator(@RequestBody Motivator m) {
		DateAndTimeFinder dtm = new DateAndTimeFinder();
		m.setMotiid(m.getEmail());
		//GEnerate Passod, Save in lo table
		motiRepo.save(m);
		
	}
	
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	@GetMapping("/getRegUsers")
	public List<RegUsers> regUsers()
	{
		return (List<RegUsers>) regRepo.findAll();
	}
	@GetMapping("/getOneRegUsers/{id}")
	public Optional<RegUsers> getOneRegUsers(@PathVariable String id)
	{
		return regRepo.findById(id);
	}
	
	@PostMapping("/postSaveRegUsers")
	public void postSaveRegUsers(@RequestBody RegUsers reg) {
		DateAndTimeFinder dtm = new DateAndTimeFinder();
		reg.setRegDate(dtm.getCurrentDateAndTime());
		regRepo.save(reg);
	}
	
	@GetMapping("getAllBatches")
	public List<Batches> getAllBatches()
	{
		return (List<Batches>) batchRepo.findAll();
	}
	@GetMapping("getAllGroups")
	public List<Groups> getAllGroups()
	{
		return (List<Groups>) groupRepo.findAll();
	}
	
	@PostMapping("setApproveUsers/{id}/{batch}/{group}")
	public void setApproveUsers(@PathVariable("id") String id, @PathVariable("batch") String batch, @PathVariable("group") String group)
	{
		System.out.println("IN APP ME");
		DateAndTimeFinder dtm = new DateAndTimeFinder();
		Batches b = batchRepo.findByBatchname(batch).get(0);
		Groups g = groupRepo.findByGroupname(group).get(0);
		//Generate PAssowrd, Refid, find Ref by, Send mail, Save in Log details
		Optional<RegUsers> rg = regRepo.findById(id);
		Users u = new Users(rg.get().getEmail(), rg.get().getName(), rg.get().getAge(), rg.get().getEmail(), b, g, rg.get().getGender(),
				rg.get().getMobile(), rg.get().getAddress(), rg.get().getCountry(), rg.get().getState(),rg.get().getCity(),
				rg.get().getPincode(), rg.get().getHeight(), rg.get().getWeight(), rg.get().getBmi(),
				rg.get().getReason(), rg.get().getMedRes(), rg.get().getDietRes(), rg.get().getFood(), rg.get().getPreg(),
				"REF", dtm.getCurrentDateAndTime(), "REFID", "PASS");
		
		userRepo.save(u);
		regRepo.deleteById(id);
	}
	
	
	@PostMapping("/setRejectUsers/{id}/{reason}")
	public void setRejectUsers(@PathVariable("id") String id, @PathVariable("reason") String reason)
	{
		//Delete from regUsers repo,
		regRepo.deleteById(regRepo.findById(id).get().getEmail());
		//Send Rejection mail
	}
	
	
//	@PostMapping("/postCreateBatch")
//	public void postCreateBatch(@RequestBody Batches b) {
//		DateAndTimeFinder dtm = new DateAndTimeFinder(); b.setStrtdate(dtm.getCurrentDateAndTime());
//		batchRepo.save(b);
//	}
	
	
	
	@PostMapping("/postCreateBatch")
	public HttpStatus postCreateBatch(@RequestBody Batches b) {
		DateAndTimeFinder dtm = new DateAndTimeFinder(); b.setStrtdate(dtm.getCurrentDateAndTime());
		batchRepo.save(b);
		return HttpStatus.CREATED;
	
	}
	
	
	@PostMapping("/postCreateGroup")
	public void postCreateGroup(@RequestBody Groups g) {
		DateAndTimeFinder dtm = new DateAndTimeFinder(); g.setStrtdate(dtm.getCurrentDateAndTime());
		groupRepo.save(g);
	}
	
	
	@PostMapping("/postAddUser")
	public void postAddUser(@RequestBody Motivator moti) {
		motiRepo.save(moti);
	}
	
	@PostMapping("/postAddMoti")
	public void postAddMoti(@RequestBody Users user) {
		userRepo.save(user);
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////             ADMIN                ////////////////////////////////////////
	
	@PostMapping("/postAdminOutbox")
	public void adminOutbox(@RequestBody AdminOutbox ao)
	{
		System.out.println("ADD OUU");
		DateAndTimeFinder dtm = new DateAndTimeFinder(); ao.setDtm(dtm.getCurrentDateAndTime());
		aoRepo.save(ao);
	}
	
	@PostMapping("postAdminInbox")
	public void postAdminInbox(@RequestBody AdminInbox inb)
	{
		DateAndTimeFinder dtm = new DateAndTimeFinder(); inb.setDtm(dtm.getCurrentDateAndTime());
		aiRepo.save(inb);
	}
	@GetMapping("getAdminOutbox")
	public List<AdminOutbox> getAdminOutbox()
	{
		return (List<AdminOutbox>) aoRepo.findAll();
	}
	@GetMapping("getAdminInboxFrmMoti")
	public List<AdminInbox> getAdminInboxFrmMoti()
	{
		return aiRepo.findByType("Motivator");
	}
	@GetMapping("getAdminInboxFrmUser")
	public List<AdminInbox> getAdminInboxFrmUser()
	{
		return aiRepo.findByType("User");
	}
	@GetMapping("getAdminInbox")
	public List<AdminInbox> getAdminInbox()
	{
		return (List<AdminInbox>) aiRepo.findAll();
	}

	
	@PostMapping("postAdminOlderPost")
	public void postAdminOlderPost(@RequestBody AdminOlderPost aop)
	{
		DateAndTimeFinder dtm = new DateAndTimeFinder();aop.setDtm(dtm.getCurrentDateAndTime());
		aopRepo.save(aop);
	}
	@GetMapping("getAdminOlderPost")
	public List<AdminOlderPost> getAdminOlderPost()
	{
		return (List<AdminOlderPost>) aopRepo.findAll();
	}
	@GetMapping("getAdminViewPost")
	public List<AdminViewPost> getAdminViewPost()
	{
		return (List<AdminViewPost>) avpRepo.findAll();
	}
	
	
	@PostMapping("/postAdminViewPost")
	public void postAdminViewPost(@RequestBody AdminViewPost post) {
		DateAndTimeFinder dtm = new DateAndTimeFinder(); post.setDtm(dtm.getCurrentDateAndTime());
		avpRepo.save(post);
	}
	
	@GetMapping("isMotiAvail/{moti}/{batch}")
	public List<MotiBatch> isMotiAvail(@PathVariable String moti, @PathVariable String batch) {
		List<MotiBatch> nn = mbRepo.findByMotiidAndBatch(moti, batch);
	
		return nn;
	}
	
	@PostMapping("postAssignMotivator")
	public void postAssignMotivator(@RequestBody MotiBatch mb) {
		System.out.println(mb);
		mbRepo.save(mb);
		Optional<Motivator> m = motiRepo.findById(mb.getMotiid());
		String batch = m.get().getBatches();
		if(batch!="")
		batch= batch+","+mb.getBatch();
		else batch= batch+""+mb.getBatch();
		m.get().setBatches(batch);
		motiRepo.save(m.get());
		
	}
	@GetMapping("/getAssignMotiDetails")
	public List<assignMoti> kk() {
		List<assignMoti> ret = new ArrayList<assignMoti>();
		
		List<Batches> b = (List<Batches>) batchRepo.findAll();
		for(Batches l: b) {
			List<Motivator> list = new ArrayList<Motivator>();
			//System.out.println(l.getBatchname());
			List<MotiBatch> mb = mbRepo.findByBatch(l.getBatchname());
			for(MotiBatch m: mb) {
				
				list.add(motiRepo.findById(m.getMotiid()).get());
			}
			ret.add(new assignMoti(l.getBatchname(),list));
		}
		
		//System.out.println(ret);
		System.out.println(ret);
		return ret;
	}
	
	
	@DeleteMapping("deAssignMoti/{batch}/{id}")
	public void deAssign(@PathVariable String batch, @PathVariable String id) {
		
		List<MotiBatch> mb = mbRepo.findByMotiidAndBatch(id, batch);
		if(!mb.isEmpty())
		mbRepo.delete(mb.get(0));
		
		Optional<Motivator> m = motiRepo.findById(id);
		String curBatch = m.get().getBatches();
	
		String newbatch = "";
		String arr[] = curBatch.split(",");
		for(int i=0; i<arr.length; i++) {
			System.out.println(arr[i]);
			if(arr[i].equals(batch)) {
				continue;
			}
			else {
				if(newbatch!="")
				newbatch = newbatch+","+arr[i];
				else newbatch = newbatch+""+arr[i];
			}
		}
		m.get().setBatches(newbatch);
		motiRepo.save(m.get());
		
	}
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////             USER                  //////////////////////////////////////////
	
	@PostMapping("postUserInbox")
	public void postUserInbox(@RequestBody UserInbox inb)
	{
		DateAndTimeFinder dtm = new DateAndTimeFinder(); inb.setDtm(dtm.getCurrentDateAndTime());
		uiRepo.save(inb);
	}
	@PostMapping("postUserOutbox")
	public void userPostOutbox(@RequestBody UserOutbox out)
	{
		DateAndTimeFinder dtm = new DateAndTimeFinder(); out.setDtm(dtm.getCurrentDateAndTime());
		uoRepo.save(out);	
	}
	@GetMapping("getUserOutbox/{id}")
	public List<UserOutbox> getUserOutbox(@PathVariable String id){
		System.out.println("user out");
		return (List<UserOutbox>) uoRepo.findByFrm(id);
	}
	
	
	@GetMapping("getUserInboxFrmMoti")
	public List<UserInbox> getUserInboxFrmMoti()
	{
		return uiRepo.findByType("Motivator");
	}
	@GetMapping("getUserInboxFrmAdmin")
	public List<UserInbox> getUserInboxFrmAdmin()
	{
		return uiRepo.findByType("Admin");
	}
	@GetMapping("getUserInbox/{id}")
	public List<UserInbox> getUserInbox(@PathVariable String id)
	{
		return uiRepo.findByTo(id);
	}
	
	
	@PostMapping("/postUserViewPost")
	public void postUserViewPost(@RequestBody UserViewPost post)
	{
		DateAndTimeFinder dtm = new DateAndTimeFinder(); post.setDtm(dtm.getCurrentDateAndTime());
		uvpRepo.save(post);		
	}
	
	@GetMapping("getUserViewPost/{id}")
	public List<UserViewPost> getUserViewPost(@PathVariable String id)
	{
		List<UserViewPost> list = new ArrayList<UserViewPost>();
		list.addAll(uvpRepo.findByAud("Users"));
		list.addAll(uvpRepo.findByAud("Everyone"));
		String bg = "";
		if(userRepo.existsById(id)) {
			Optional<Users> u = userRepo.findById(id);
			list.addAll(uvpRepo.findByAud(u.get().getBatch().getBatchname()));
			list.addAll(uvpRepo.findByAud(u.get().getGroup().getGroupname()));
			bg = u.get().getBatch().getBatchname()+u.get().getGroup().getGroupname();
			list.addAll(uvpRepo.findByAud(bg));
		}
	
		return list;
	}
	
	@GetMapping("getUserOlderPost/{id}")
	public List<UserOlderPost> getUserOlderPost(@PathVariable String id)
	{
		System.out.println("ID is "+id);
		return uopRepo.findByFrm(id);
	}
	
	
	
	@PostMapping("postUserDailylog")
	public void postUserDailylog(@RequestBody UserDailyLog log)
	{
		DateAndTimeFinder dtm = new DateAndTimeFinder(); log.setDtm( dtm.getCurrentDateAndTime());
		udlRepo.save(log);
	}
	@PostMapping("postUserMonthlyMeas")
	public void postUserMonthlyMeas(@RequestBody UserMonthlyMeas mes)
	{
		ummRepo.save(mes);
		//ummRepo.save(mes);	
	}
	
	@GetMapping("getMonthlyReport/{userid}")
	public List<UserMonthlyMeas> getMonthlyReport(@PathVariable String userid){
		System.out.println("INN");
		System.out.println( ummRepo.findByUserid(userid));
		return ummRepo.findByUserid(userid);
	}
	
	@PostMapping("postUserOlderPost")
	public void postUserOlderPost(@RequestBody UserOlderPost post) {
		DateAndTimeFinder dtm = new DateAndTimeFinder(); post.setDtm(dtm.getCurrentDateAndTime());
		uopRepo.save(post);
	}
	@GetMapping("getUserOlderPost")
	public List<UserOlderPost> getUserOlderPost() {
		return (List<UserOlderPost>) uopRepo.findAll();
	}
	
	
	
	@GetMapping("getUserWeeklyDiet/{id}")
	public List<WeeklyDiet> getUserWeeklyDiet(@PathVariable String id){
		
		List<WeeklyDiet> list = new ArrayList<WeeklyDiet>();
		list.addAll( wdRepo.findByBatch("All batches"));
		if(userRepo.existsById(id)) {
			Optional<Users> u = userRepo.findById(id);
			String b = u.get().getBatch().getBatchname();
			
			list.addAll(wdRepo.findByBatch(b));
		}
		
		return list;
		
	}
	
	
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////            MOTIVATOR           ///////////////////////////////////////////
	@PostMapping("postMotiInbox")
	public void postMotiInbox(@RequestBody MotiInbox inb)
	{
		DateAndTimeFinder dtm = new DateAndTimeFinder(); inb.setDtm(dtm.getCurrentDateAndTime());
		miRepo.save(inb);
	}
	@PostMapping("postMotiOutbox")
	public void postMotiOutbox(@RequestBody MotiOutbox out)
	{
		System.out.println("TT");
		DateAndTimeFinder dtm = new DateAndTimeFinder(); out.setDtm(dtm.getCurrentDateAndTime());
		moRepo.save(out);
	}
	@GetMapping("getMotiOutbox/{id}")
	public List<MotiOutbox> getMotiOutbox(@PathVariable String id)
	{
		System.out.println("MOTI OUT");
		System.out.println((List<MotiOutbox>) moRepo.findByFrm(id));
		return (List<MotiOutbox>) moRepo.findByFrm(id);
	}
	
	@GetMapping("getMotiInboxFrmAdmin")
	public List<MotiInbox> getMotiInboxFrmAdmin()
	{
		return miRepo.findByType("Motivator");
	}
	@GetMapping("getMotiInboxFrmUser")
	public List<MotiInbox> getMotiInboxFrmUser()
	{
		return miRepo.findByType("Admin");
	}
	
	
	@GetMapping("getMotiInbox/{id}")
	public List<MotiInbox> getMotiInbox(@PathVariable String id)
	{

		return (List<MotiInbox>) miRepo.findByTo(id);
	}
	
	
	@PostMapping("/postMotiViewPost")
	public void postMotiViewPost(@RequestBody MotiViewPost post)
	{
		DateAndTimeFinder dtm = new DateAndTimeFinder(); post.setDtm(dtm.getCurrentDateAndTime());
		mvpRepo.save(post);
	}
	@PostMapping("/postMotiOlderPost")
	public void postMotiOlderPost(@RequestBody MotiOlderPost post) {
		DateAndTimeFinder dtm = new DateAndTimeFinder(); post.setDtm(dtm.getCurrentDateAndTime());
		mopRepo.save(post);
	}
	
	@GetMapping("/getMotiOlderPost/{id}")
	public List<MotiOlderPost> getMotiOlderPost(@PathVariable String id){
		return (List<MotiOlderPost>) mopRepo.findByFrm(id);
	}
	
	@GetMapping("/getMotiViewPost")
	public List<MotiViewPost> getMotiViewPost(){
	return (List<MotiViewPost>) mvpRepo.findAll();
	}
	
	@GetMapping("/getBatchAndGroup")
	public List<String> CMB()
	{
//		BATCH AND GROUP COMBINED..
		List<Batches> liB = (List<Batches>) batchRepo.findAll();
		List<Groups> liG = (List<Groups>) groupRepo.findAll();
		List<String> com = new ArrayList<String>();
		for(int i=0; i<liG.size(); i++)
		{
			for(int j=0; j<liB.size(); j++)
			{
				com.add(liB.get(j).getBatchname()+"-"+liG.get(i).getGroupname());
			}
		}
		return com;
		
	}
	
	
	
	@GetMapping("getMotivatingBatches/{id}")
	public List<Batches> getMotivatingBatches(@PathVariable String id){
		System.out.println("CACC");
		List<MotiBatch> mb = mbRepo.findByMotiid(id);
		System.out.println(mb);
		List<Batches> list = new ArrayList<Batches>();
		for(MotiBatch i : mb) {
			System.out.println(i.getBatch());
		List<Batches> b = batchRepo.findByBatchname(i.getBatch());
			System.out.println(b);
			list.addAll(b);
		}
		System.out.println(list);
		return list;
	}
	@GetMapping("getMotivatingUsers/{id}")
	public List<Users> getMotivatingUsers(@PathVariable String id){
		List<MotiBatch> mb = mbRepo.findByMotiid(id);
		List<Users> list = new ArrayList<Users>();
		for(MotiBatch i: mb) {
			List<Batches> b = batchRepo.findByBatchname(i.getBatch());
			List<Users> u = userRepo.findByBatch(b.get(0));
			list.addAll(u);
		}
		return list;
	}
	
	
	public List<MotivatingBatches> ll (@PathVariable String id){
		System.out.println("CAME HERE");
		List<MotiBatch> mb = mbRepo.findByMotiid(id);
		List<MotivatingBatches> list = new ArrayList<MotivatingBatches>();
		for(MotiBatch i: mb) {
			List<Batches> b = batchRepo.findByBatchname(i.getBatch());
			List<Users> u = userRepo.findByBatch(b.get(0));
			//MotivatingBatches mot = new MotivatingBatches(b.get(0).getBatchname(), u);
			//list.add(mot);
		}
		System.out.println("LI "+list);
		return  list;
	}
	
	
	
	@GetMapping("getDailyLog")
	public List<UserDailyLog> getMotiDailyLog(){
		
		
	return (List<UserDailyLog>) udlRepo.findAll();
	}
	
	@GetMapping("getDailyLogByDate/{date}")
	public List<UserDailyLog> getDailyLog(@PathVariable String date){
		return udlRepo.findByDatee(date);
	}
	
	
	@GetMapping("getDailyLogByDate/{id}/{date}")
	public List<UserDailyLog> getDailyLogByDate(@PathVariable String id, @PathVariable String date){
		System.out.println(date);
		List<MotiBatch> mb = mbRepo.findByMotiid(id);
		List<UserDailyLog> list = new ArrayList<UserDailyLog>();
		for(MotiBatch i: mb) {
			List<Batches> b = batchRepo.findByBatchname(i.getBatch());
			List<Users> u = userRepo.findByBatch(b.get(0));
			for(Users ul : u) {
//				
				list.addAll(udlRepo.findByBatchAndDatee(ul.getBatch().getBatchname(), date));
			}
		
		}
		System.out.println(list);
		return list;
	}
	
	
	@GetMapping("getDailyLogByBatch/{batch}")
	public List<UserDailyLog> getDailyLogByBatch(@PathVariable String batch){
	//	System.out.println(date);

		return udlRepo.findByBatch(batch);
	}
	@GetMapping("getDailyLogByMotivator/{id}")
	public List<UserDailyLog> getDailyLogByMotivator(@PathVariable String id){
	//	System.out.println(date);

		List<MotiBatch> mb = mbRepo.findByMotiid(id);
		List<UserDailyLog> list = new ArrayList<UserDailyLog>();
		for(MotiBatch i: mb) {
			List<Batches> b = batchRepo.findByBatchname(i.getBatch());
			List<Users> u = userRepo.findByBatch(b.get(0));
			for(Users ul : u) {
//				
				list.addAll(udlRepo.findByBatch(ul.getBatch().getBatchname()));
			}
		
		}
		System.out.println(list);
		return list;
	}
	
	
	////////////////////////////////////////SEARCH/////////////////////////////////////////////////////////
	
  @GetMapping("searchByUser/{value}")
  public List<Users> searchByUser(@PathVariable String value) {
  
	 List<Users> list = new ArrayList<Users>();
	list = userRepo.findByUseridIgnoreCase(value);
	if(list.isEmpty()) {
		list = userRepo.findByNameIgnoreCase(value);
	}
	  return list;
  }
  
	
  @GetMapping("searchByMoti/{value}")
  public List<Motivator> searchByMoti(@PathVariable String value) {
	  
		 List<Motivator> list = new ArrayList<Motivator>();
			list = motiRepo.findByMotiidIgnoreCase(value);
			if(list.isEmpty()) {
				list = motiRepo.findByNameIgnoreCase(value);			}
			  return list;
  }
  
  
  @GetMapping("searchByBatch/{value}")
  public List<Batches> searchByBatch(@PathVariable String value) {
	  List<Batches> list = new ArrayList<Batches>();
	  list = batchRepo.findByBatchnameIgnoreCase(value);
	  
	  return list;
  }
  @GetMapping("batchMotivatorDetails/{batch}")
  public List<Motivator> batchMotivatorDetails(@PathVariable String batch){
	 List<MotiBatch> list =  mbRepo.findByBatchIgnoreCase(batch);
	 List<Motivator> moti = new ArrayList<Motivator>();
	// moti.addAll(motiRepo.findById(list.listIterator)));
	 for(MotiBatch m: list) {
		 String s = m.getMotiid();
		 Optional<Motivator> mm = motiRepo.findById(s);
		moti.add(mm.get());
	 }
	 return moti;
  }
  
  
  @GetMapping("userFindByBatch/{batch}")
  public List<Users> userFindByBatch(@PathVariable String batch){
	  List<Batches> b = batchRepo.findByBatchnameIgnoreCase(batch);
	  return  userRepo.findByBatch(b.get(0));
	//  return null;
  }
  
  @GetMapping("searchByGroup/{group}")
  public List<Groups> searchByGroup(@PathVariable String group) {
	  List<Groups> list = groupRepo.findByGroupnameIgnoreCase(group);
	  return list;
  }
  @GetMapping("userFindByGroup/{group}")
  public List<Users> userFindByGroup(@PathVariable String group){
	  List<Groups> list = groupRepo.findByGroupnameIgnoreCase(group);
	  return userRepo.findBygroup(list.get(0));
  }
  
  @PostMapping("/fileUpload")
  public void uploadFile(@RequestParam("file") MultipartFile fil) {
	  
	 // System.out.println(file.getOriginalFilename());
	  System.out.println(fil.getOriginalFilename());
//	  File file = new File("src/test/resources/input.txt");
//	    FileInputStream input = new FileInputStream(file);
//	    MultipartFile multipartFile = new MockMultipartFile("file",
//	            file.getName(), "text/plain", IOUtils.toByteArray(input));
//	  byte[] bytes = null;
//		try {
//			bytes = file.getBytes();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		
//		System.out.println(" -- File Uplaoding Start");
//		FileUpload fu = new FileUpload(file.getOriginalFilename(), file.getContentType(), bytes);
//		fileRepo.save(fu);
//		
//		System.out.println("File Upload Over -- ");
	  
  }
//  consumes = "multipart/form-data"
  
  @PostMapping(value = "/savefile",consumes = {"multipart/form-data"})
  public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
	  System.out.println("::");
	  System.out.println(file.getOriginalFilename());
	  
	  byte[] bytes = null;
		try {
			bytes = file.getBytes();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		System.out.println(" -- File Uplaoding Start");
		FileUpload fu = new FileUpload(file.getOriginalFilename(), file.getContentType(), bytes);
		fupRepo.save(fu);
		
		System.out.println("File Upload Over -- ");
	  
	return null;
  }
  @PostMapping("uploadWeeklyDiet")
  public void uploadWeeklyDiet(@RequestBody WeeklyDiet diet) {
	  DateAndTimeFinder dtm = new DateAndTimeFinder();
	  diet.setDtm(dtm.getCurrentDateAndTime());
	  wdRepo.save(diet);
  }
  @GetMapping("viewRecentUploads")
  public List<WeeklyDiet> viewRecentUploads(){
	  return (List<WeeklyDiet>) wdRepo.findAll();
  }
  
  
  
  
  @GetMapping("downloadFile/{name}")
  public  ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String name){
	  
	  System.out.println("DQ - "+name);
	  List<FileUpload> fil =  fupRepo.findByFilename(name);
	  FileUpload f = fil.get(0);
	  HttpHeaders headers = new HttpHeaders();
      headers.add("filename", f.getFilename());
      headers.add("filetype", f.getFiletype());
      headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + f.getFilename() + "\"");
      headers.add(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "filename,filetype,"+HttpHeaders.CONTENT_DISPOSITION);

      return ResponseEntity.ok()
              .contentType(MediaType.parseMediaType(f.getFiletype()))
              .headers(headers)
              .body(new ByteArrayResource(f.getData()));
	  
	  
	 // return null;
  }
  
  
  
  
  
  
//  @RequestMapping("downloadFile/{name}")
//  public void name(@PathVariable String name) throws IOException {
//	  System.out.println("YES");
//	  dd(name);
//	  
//	
//}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//  
//  public ResponseEntity<Resource> getFileByName(@PathVariable String fileName) {
//	  List<FileUpload> dbFile  =  fupRepo.findByFilename(fileName);
//	  File file = new File();
//	  Resource resource = new UrlResource(file.toUri());
//	  //  Resource file = dbFile.get(0).getData();
//	    return ResponseEntity.ok()
//	            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
//	            .body(file);
//	}
  
  
  
  
//  public HttpEntity<ByteArrayResource> downloadFile(@PathVariable String name) {
  @ResponseBody
  public ResponseEntity dd(@PathVariable String name ) throws IOException {
//  public ResponseEntity dd(String name ) throws IOException {
      // Load file from database
//      DBFile dbFile = dbFileStorageService.getFile(fileId);
		System.out.println("Came to dwon");
		List<FileUpload> dbFile  =  fupRepo.findByFilename(name);
		
//		System.out.println("File Downloading Startedd");
		System.out.println(dbFile.get(0).getFilename());
 return ResponseEntity.ok()
		 .contentType(MediaType.parseMediaType(dbFile.get(0).getFiletype()))
              .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.get(0).getFilename() + "\"")
              .body(new ByteArrayResource(dbFile.get(0).getData()));
// 
 
//		ByteArrayResource ba = new ByteArrayResource(((FileUpload) fupRepo.findByFilename(name)).getData());
//		System.out.println("OOOOOOOOOOOOOOOOOOOOOOOOOO");
//		ByteArrayResource ba = new ByteArrayResource(dbFile.get(0).getData());
//		System.out.println(ba.getFilename());
//		System.out.println(ba.getByteArray());
//		System.out.println(ba.getFile()s);
//		System.out.println("))))");
//		File file =ba.getFile();
//		
//			
//		if (file.exists()) {
//				System.out.println("OPOPPPPP");
//			// get the mimetype
//			String mimeType = URLConnection.guessContentTypeFromName(file.getName());
//			System.out.println("OWWWWWWWWWWWW");
//			if (mimeType == null) {
//				System.out.println("QEEEEEEEEEE");
//				// unknown mimetype so set the mimetype to application/octet-stream
//				mimeType = "application/octet-stream";
//			}
//			System.out.println("AA");
//			HttpServletRequest request;
//			HttpServletResponse response = null;
//			System.out.println("BB");
//			response.setContentType(mimeType);
//			System.out.println("CC");
//			response.setHeader("Content-Disposition", String.format("attachment; filename=\"" + file.getName() + "\""));
//			System.out.println("DD");
//			response.setContentLength((int) file.length());
//			System.out.println("EE");
//			InputStream inputStream = null;
//			try {
//				System.out.println("FF");
//				inputStream = new BufferedInputStream(new FileInputStream(file));
//			} catch (FileNotFoundException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//
//			try {
//				System.out.println("GG");
//				FileCopyUtils.copy(inputStream, response.getOutputStream());
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}

//		}
//
// 
// 
// 
// 
 
 
 
 
 
  }
//  @GetMapping("/download/{fileName:.+}/db")
//  public ResponseEntity downloadFromDB(@PathVariable String fileName) {
////  	Document document = fupRepo.findByFilename(fileName)
//		ByteArrayResource ba = new ByteArrayResource(((FileUpload) fupRepo.findByFilename(fileName)).getData());
//		File file =ba.getFile();
//	  File f = (File) fupRepo.findByFilename(fileName);
//	  String mimeType = URLConnection.guessContentTypeFromName(file.getName());
//  	return ResponseEntity.ok()
//  			.contentType(MediaType.parseMediaType(mimeType)
//  			.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
//  			.body(file.getAbsoluteFile());
//  }
//  
  
  
  
  
  
  
  
  
  
  @PostMapping("/removeFile/{id}")
  public void removeFile(@PathVariable int id) {
	  System.out.println("DELt ifv"+id);
	  if(fupRepo.existsById(id))   fupRepo.deleteById(id);
	  if(wdRepo.existsById(id))
	  wdRepo.deleteById(id);
  }

}
