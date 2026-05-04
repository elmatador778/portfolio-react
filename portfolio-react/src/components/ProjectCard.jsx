import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

const bodyVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.15 },
    },
  },
};

export default function ProjectCard({ tag, tagHw, titleEn, titleFr, descEn, descFr, badges, isOpen, onToggle }) {
  const { t } = useLang();

  return (
    <div
      className={`card${tagHw ? ' card-hw' : ''}${isOpen ? ' open' : ''}`}
      onClick={onToggle}
    >
      <div className="card-header">
        <span className={`card-tag${tagHw ? ' tag-hw' : ''}`}>{tag}</span>
        <h3 className="card-title">{t(titleEn, titleFr)}</h3>
        <motion.span
          className="card-arrow"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          ▼
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="card-body"
            style={{ overflow: 'hidden', display: 'block' }}
            variants={bodyVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>{t(descEn, descFr)}</p>
            <div className="card-meta">
              {badges.map(b => (
                <span className="badge" key={b}>{b}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
