import { z } from "zod"


export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be atleast 3 char bozo boy'),
  description: z.string().min(3, 'Description must be atleast 3 chareters bozo boy').max(400, "Too much charecters bozo"),
  location: z.string().min(3, 'Title must be atleast 3 char bozo boy').max(400, "Cant be real location homie"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()


  })
