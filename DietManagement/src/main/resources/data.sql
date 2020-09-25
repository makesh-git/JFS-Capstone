insert into batches values ('100','Thisss','above','Above','11/22/33');
insert into batches values ('101','Thiss','BELOQ','Below','11/22/33');

insert into groups values ('100','Thissi','chennai','Chennai','11/33/44');
insert into groups values ('101','Thsisis','mens','Mens','33/44/55');

insert into LOGIN_CREDENTIALS values('aa','pp','Admin');
insert into LOGIN_CREDENTIALS values('mm','pp','Motivator');
insert into LOGIN_CREDENTIALS values('uu','pp','User');

insert into users values ('mynameis','Addre','23','25','CITY','India','No Dite','mynameis','Vegetarian','Male','156','No MEDRES','909090','Makesh','PASS','6767676','Not Applicable','SOmeREson','ADDED BY ADMIN','YUWY2','11/23/333','TAMILNADU','67','100','100');

insert into users values ('makeshthemass','Addre','23','25','CITY','India','No Dite','makeshthemass','Vegetarian','Male','156','No MEDRES','909090','Kumar','PASS','6767676','Not Applicable','SOmeREson','ADDED BY ADMIN','GHAKQ','11/23/333','TAMILNADU','67','101','101');




insert into motivator values('motiId1','ADDREDDDDDD','23','Above','CITY','Country','motiId1','Male','156','4455322','MotiName','dddd','678432','place','REFF','@@/22/333','Tamilnadu','45');
insert into motivator values('motiId2','ADDREDDDDDD','23','Above','CITY','Country','motiId2','Male','156','4455322','MotiName','dddd','678432','place','REFF','@@/22/333','Tamilnadu','45');
insert into motivator values('motiId3','ADDREDDDDDD','23','Below','CITY','Country','motiId3','Male','156','4455322','MotiName','dddd','678432','place','REFF','@@/22/333','Tamilnadu','45');


insert into REG_USERS values('sourav@use.com','Mysore,Karnataka','22','27.93','Mysore','India','Nothing','Nog-Vegetarian','Male','149','None','8764512980','Sourav','678234','Not Applicable','To gain my body weight and to lead helathy life','MSD007 - Referred by : Ms Dhoni ','11/03/2020 12:22:22','Karnataka','62');
insert into REG_USERS values('gambir@use.com','Tambaram,Chennai','23','37.93','Chennai','India','None','Vegetarian','Male','164','No','897651208','Sa','638702','Gambir','I want to reduce my weight','GY0349 - Referred By : Not Found','10/03/2020 10:16:39','Tamil Nadu','79');



insert into  MOTI_BATCH values('100','Above','motiId1');
insert into  MOTI_BATCH values('101','Above','motiId2');
insert into  MOTI_BATCH values('102','Below','motiId3');







insert into ADMIN_INBOX values('100','31/03/2020 21:17:13','CURRENT','Motivator msg to Admin','Admin','Motivator');
insert into ADMIN_INBOX values('101','31/03/2020 22:10:13','CURRENT','User msg to Admin','Admin','User');
insert into ADMIN_INBOX values('103','31/03/2020 21:17:13','CURRENT','Motivator msg to Admin','Admin','Motivator');
insert into ADMIN_INBOX values('104','31/03/2020 22:10:13','CURRENT','User msg to Admin','Admin','User');
insert into ADMIN_INBOX values('105','31/03/2020 21:17:13','CURRENT','Motivator msg to Admin','Admin','Motivator');


insert into MOTI_INBOX values('100','31/03/2020 21:17:13','ADMIN','Motivator msg to Admin','motiId1','Admin');
insert into MOTI_INBOX values('101','31/03/2020 21:17:13','mynameis','Motivator msg to Admin','motiId1','User');
insert into MOTI_INBOX values('102','31/03/2020 21:17:13','ADMIN','Motivator msg to Admin','motiId1','Admin');
insert into MOTI_INBOX values('103','31/03/2020 21:17:13','mynameis','Motivator msg to Admin','motiId1','User');

insert into  USER_INBOX values('100','31/03/2020 21:17:13','motiid1','Motivator msg to Admin','mynameis','Motivator');
insert into  USER_INBOX values('101','31/03/2020 21:17:13','Admin','Motivator msg to Admin','mynameis','Admin');
insert into  USER_INBOX values('102','31/03/2020 21:17:13','motiid1','Motivator msg to Admin','mynameis','Motivator');
insert into  USER_INBOX values('103','31/03/2020 21:17:13','Admin','Motivator msg to Admin','mynameis','Admin');


insert into ADMIN_VIEW_POST values('100','Admin','01/04/2020 16:21:30','CURRENT','This is the kNAd the alas the socina marketing and the xoellos of the initima teind of post','Motivator');
insert into ADMIN_VIEW_POST values('101','Everyone','01/04/2020 16:21:30','CURRENT','This is the kind of post','User');
insert into ADMIN_VIEW_POST values('102','Admin','01/04/2020 16:21:30','CURRENT','This is the kind of post','User');
insert into ADMIN_VIEW_POST values('103','Everyone','01/04/2020 16:21:30','CURRENT','This is the kind of post','Motivator');
insert into ADMIN_VIEW_POST values('104','Admin','01/04/2020 16:21:30','CURRENT','This is the kind of post','Motivator');



insert into MOTI_VIEW_POST values('100','Admin','01/04/2020 16:21:30','Admin','This is the kind of post','Admin');
insert into MOTI_VIEW_POST values('101','Everyone','01/04/2020 16:21:30','CURRENT','This is the kind of post','User');
insert into MOTI_VIEW_POST values('102','Admin','01/04/2020 16:21:30','CURRENT','This is the kind of post','User');
insert into MOTI_VIEW_POST values('103','Everyone','01/04/2020 16:21:30','Admin','This is the kind of post','Admin');
insert into MOTI_VIEW_POST values('104','Admin','01/04/2020 16:21:30','CURRENT','This is the kind of post','User');


insert into USER_VIEW_POST values('100','Above-Mens','01/04/2020 16:21:30','CURRENT	','This is the kind of post','Motivator');
insert into USER_VIEW_POST values('101','Everyone','01/04/2020 16:21:30','CURRENT	','This is the kind of post','Motivator');
insert into USER_VIEW_POST values('102','Above','01/04/2020 16:21:30','CURRENT	','This is the kind of post','Admin');
insert into USER_VIEW_POST values('103','Below','01/04/2020 16:21:30','CURRENT	','This is the kind of post','Motivator');
insert into USER_VIEW_POST values('104','Users','01/04/2020 16:21:30','CURRENT	','This is the kind of post','Admin');




insert into USER_DAILY_LOG values('100', 'Above','Two Idli with vadasand some fruits','2020-04-02','Two Idli with vadasand some fruits','Two Idli with vadasand some fruits','02/04/2020 16:52:33','mynameis','Two Idli with vadasand some fruits','eeee','deddeddd');
insert into USER_DAILY_LOG values('101','Below','bbbbbb','2020-04-03','wddsdsdsdsd','rreererreree','02/04/2020 16:52:33','makeshthemass','wdeee3e','eeee','deddeddd');
insert into USER_DAILY_LOG values('102','Above','bbbbbb','2020-04-03','wddsdsdsdsd','rreererreree','02/04/2020 16:52:33','mynameis','wdeee3e','eeee','deddeddd');
insert into USER_DAILY_LOG values('103','Above','bbbbbb','2020-04-05','wddsdsdsdsd','rreererreree','02/04/2020 16:52:33','mynameis','wdeee3e','eeee','deddeddd');




