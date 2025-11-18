import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

export default function AnimatedCard({ className, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn('rounded-2xl border border-white/10 bg-white/5 backdrop-blur will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}
