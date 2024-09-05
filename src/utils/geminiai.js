import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAI_KEY } from "./constants"
 
const geminiai = new GoogleGenerativeAI(GEMINIAI_KEY);

export default geminiai;
