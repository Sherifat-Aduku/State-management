import { useContext } from "react"
import { NotificationContext } from "./NotificationContext"

export const useAlert =()=> {
return (useContext(NotificationContext))
};