import mongoose from "mongoose";
import dotenv from "dotenv";
import { type } from "os";
import { email } from "zod";
dotenv.config();
mongoose.connect(process.env.DB_URL)

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const StatsSchema=new mongoose.Schema({
    units:{
        type:String,
        default:"0"
    },
    kilowatts:{
        type:String,
        default:"0"
    },
    solarPump:{
        type:String,
        default:"0"
    },
    co2:{
        type:String,
        default:"0"
    },
    happyCustomers:{
        type:String,
        default:"0"
    },
     EnergyProduced:{
        type:String,
        default:"0"
    },
     EnergyConsumed:{
        type:String,
        default:"0"
    },
     EnergySold:{
        type:String,
        default:"0"
    }, 
})
const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const BannerSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    }
})

const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    solarType:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }, bill:{
        type:String,
        required:true
    },
})

const RoofSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     content:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const notificationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  message: { type: String, required: true },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  city: { type: String },
  state: { type: String },
  solarType: { type: String },
  bill: { type: String },
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
});



export const User=mongoose.model("User",UserSchema);
export const Stats=mongoose.model("Stats",StatsSchema);
export const Blogs=mongoose.model("Blogs",BlogSchema);
export const Banner=mongoose.model("Banner",BannerSchema);
export const Contact=mongoose.model("Contact",ContactSchema);
export const Roof=mongoose.model("Roof",RoofSchema);
export const Ground=mongoose.model("Ground",RoofSchema);
export const PM=mongoose.model("PM",RoofSchema);
export const AMC=mongoose.model("AMC",RoofSchema);
export const ProjectBanner=mongoose.model("ProjectBanner",BannerSchema);
export const BlogBanner=mongoose.model("BlogBanner",BannerSchema);
export const AboutBanner=mongoose.model("AboutBanner",BannerSchema);
export const ServiceBanner=mongoose.model("ServiceBanner",BannerSchema);
export const ContactBanner=mongoose.model("ContactBanner",BannerSchema);
export const Testimonial=mongoose.model("Testimonial",BlogSchema);
export const Notification = mongoose.model("Notification", notificationSchema);