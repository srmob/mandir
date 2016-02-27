db.purohit.insert({
	"name" : "Ganesh Shastry",
	"age" : 42,
	"experience" : 12,
	"speciality" : ["ganesh homa", "Ayush Homa"]
});

db.purohit.insert({
	"name" : "Shankar Shastry",
	"age" : 55,
	"experience" : 25,
	"speciality" : ["ganesh homa", "Ayush Homa"]
});

db.purohit.insert({
	"name" : "Madhav Shastry",
	"age" : 52,
	"experience" : 28,
	"speciality" : ["ganesh homa", "Ayush Homa","Gowri Ganesha"]
});
db.purohit.insert({
	"name" : "Gopal Bhat",
	"age" : 76,
	"experience" : 40,
	"speciality" : ["Satyanarayana homa", "Ayush Homa","Gowri Ganesha"]
});

db.event.insert({
    name: 'Ganesh Chaturthi',
    date : '16-Sep-2016',
    duration : '3 hours',
    purohits:['Madhava Shastry']
});
db.event.insert({
    name: 'Ganesh Homa',
    duration : '3 hours',
    purohits:['Shankar Shastry']
});
db.event.insert({
    name: 'Satyanarayana pooja',
    duration : '3 hours',
    date : '15-March-2016'
});
db.event.insert({
    name: 'Varamahalakshmi vrata pooja',
    duration : '3 hours',
    date : '15-Aug-2016'
});