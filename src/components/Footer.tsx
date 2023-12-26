import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="dark:bg-neutral-900 p-12 max-[1070px]:px-12 max-[550px]:px-6 ">

        <p className="text-center text-sm mt-12 font-thin">© 2023 ELTHED@LAW CONSULT. All rights reserved.</p>

        <div className="icons flex justify-center pt-6 items-center gap-6 text-xl">

            <motion.div whileHover={{ scale: 1.025 }} className="icon-md">
                <Linkedin />
            </motion.div>

            <motion.div whileHover={{ scale: 1.025 }} className="icon-md">
                <Twitter />
            </motion.div>

            <motion.div whileHover={{ scale: 1.025 }} className="icon-md">
                <Instagram />
            </motion.div>

            <motion.div whileHover={{ scale: 1.025 }} className="icon-md">
                <Facebook />
            </motion.div>

        </div>

    </footer>
  )
}

export default Footer