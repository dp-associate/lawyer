const router = require("express").Router();
const { User, validate } = require("../models/user");
const Client = require('../models/client');
const bcrypt = require("bcrypt");
const Appointment = require("../models/appointment");
const cases = require("../models/cases");
const setting = require("../models/setting");
// const client = require("../models/client");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.detail[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Error" });
	}
});

//client
router.post('/add', async (req,res) => {

    const savepost=new Client(req.body);
    console.log(savepost);
    try{
        await savepost.save();
        res.send("inserted data");
     }catch(err){ 
         console.log(err)
     }
    });
//appointment
	router.post('/addappoint', async (req,res) => {
		const savepost=new Appointment(req.body);
		console.log(savepost);
		try{
			await savepost.save();
			res.send("inserted data");
		 }catch(err){ 
			 console.log(err)
		 }
		});
//readappointment
router.get('/readappoint/:id',async (req,res) => {
		
			Appointment.find({lawyer:req.params.id},(err,data) => {
				
				if(err){
		
					res.send(err)
				}
				res.send(data);
				console.log("aaa",data);
			})
		});

//readcase

router.get('/readcase/:id',async (req,res) => {
		
	cases.find({lawyer:req.params.id},(err,data) => {
		
		if(err){

			res.send(err)
		}
		res.send(data);
		console.log(data);
	})
});
		

//case dropdown

	router.get('/read/:id',async (req,res) => {
		
		Client.find({lawyer:req.params.id},(err,data) => {
			
			if(err){
	
				res.send(err)
			}
			res.send(data);
			
		})
	});
//count client

router.get('/countClients/:id', async (req,res)=> {
	try{

	
	const count=await Client.find({lawyer:req.params.id}).count()
	console.log(count)
	res.status(200).json(count);
	}
	catch(error){
		console.log(error)
		res.status(500).json(error)
		
	}
})

//count Cases

router.get('/countCases/:id', async (req,res)=> {
	try{

	const count=await cases.find({lawyer:req.params.id}).count()
	console.log(count)
	res.status(200).json(count);
	}
	catch(error){
		console.log(error)
		res.status(500).json(error)
		
	}
})



//count Upcomingcase
router.get('/Upcomingcases/:id', async (req,res)=> {
	try{
		const count=await cases.find({rname:"No",lawyer:req.params.id}).count()
	console.log(count)
	res.status(200).json(count);
	}
	catch(error){
		console.log(error)
		res.status(500).json(error)
		
	}
})
   
//count Completedcase

router.get('/CompletedCases/:id', async (req,res)=> {
	try{

	const count=await cases.find({rname:"Yes",lawyer:req.params.id}).count()
	console.log(count)
	res.status(200).json(count);
	}
	catch(error){
		console.log(error)
		res.status(500).json(error)
		
	}
})




//case type dropdown

router.get('/read1/:id',async (req,res) => {
		
	setting.find({lawyer:req.params.id},(err,data) => {
		
		if(err){

			res.send(err)
		}
		res.send(data);
		// console.log("aaa",data);
	})
});

//addcase
router.post('/addcase', async (req,res) => {

    const savepost=new cases(req.body);
    console.log(savepost);
    try{
        await savepost.save();
        res.send("inserted data");
     }catch(err){ 
         console.log(err)
     }
    });

//setting
router.post('/setting', async (req,res) => {

    const savepost=new setting(req.body);
    console.log(savepost);
    try{
        await savepost.save();
        res.send("inserted data");
     }catch(err){ 
         console.log(err)
     }
    });


	router.get('/client/:id', async (req, res) => {
		Client.find({lawyer:req.params.id}, (err,data) =>{
			if (err) {
				console.log(err)
			}
			// Pass the DB result to the template
			res.send(data)
		});
	});
	



module.exports = router;