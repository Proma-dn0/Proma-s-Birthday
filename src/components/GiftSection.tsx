import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Image as ImageIcon, Gift, X, CheckCircle2 } from 'lucide-react';
import { birthdayData, type GiftItem } from '../data/birthday';
import { fireHeartBurst } from '../utils/confetti';

interface GiftSectionProps {
  onOpenLetter: () => void;
}

export const GiftSection: React.FC<GiftSectionProps> = ({ onOpenLetter }) => {
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);

  const handleCardClick = (gift: GiftItem) => {
    setSelectedGift(gift);
    fireHeartBurst(0.5, 0.4);
  };

  const renderIcon = (type: GiftItem['iconType']) => {
    switch (type) {
      case 'letter':
        return <Mail className="w-8 h-8 text-rose-500" />;
      case 'memories':
        return <ImageIcon className="w-8 h-8 text-champagne-600" />;
      case 'surprise':
        return <Gift className="w-8 h-8 text-wine-600" />;
    }
  };

  return (
    <section id="gifts" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <Gift className="w-3 h-3 text-wine-700" />
          <span>Little Surprises</span>
        </div>
        <h3 className="font-serif text-[clamp(1.75rem,5.5vw,3rem)] text-wine-950 font-normal">
          Three Little Things for You…
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-base mt-2">
          Tap each gift to reveal what is wrapped inside
        </p>
      </div>

      {/* 3 Interactive 3D Depth Gift Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {birthdayData.gifts.map((gift, index) => (
          <motion.div
            key={gift.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCardClick(gift)}
            className="group cursor-pointer relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-950/5 border border-rose-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:border-rose-300"
          >
            {/* Top Badge */}
            <span className="text-[11px] font-sans tracking-widest uppercase px-3 py-1 rounded-full bg-blush-100 text-wine-800 font-medium mb-5 sm:mb-6">
              {gift.badge}
            </span>

            {/* Icon Container with 3D Depth */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blush-100 to-ivory-100 border border-rose-200/80 shadow-md flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {renderIcon(gift.iconType)}
            </div>

            <h4 className="font-serif text-xl sm:text-2xl text-wine-950 font-medium mb-2">
              {gift.title}
            </h4>

            <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
              {gift.subtitle}
            </p>

            <span className="mt-auto inline-flex items-center gap-1 text-xs uppercase tracking-widest text-rose-600 font-medium group-hover:text-wine-800 transition-colors">
              <span>Unwrap Gift</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </motion.div>
        ))}
      </div>

      {/* Animated Gift Modal */}
      <AnimatePresence>
        {selectedGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGift(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full max-h-[90vh] max-h-[90dvh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border border-rose-100 text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedGift(null)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gift Icon Ribbon */}
              <div className="w-16 h-16 rounded-full bg-blush-100 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
                {renderIcon(selectedGift.iconType)}
              </div>

              <span className="text-xs uppercase tracking-widest text-rose-600 font-medium">
                {selectedGift.badge}
              </span>

              <h3 className="font-serif text-3xl text-wine-950 font-medium mt-1 mb-2">
                {selectedGift.revealContent.heading}
              </h3>

              <p className="text-xs sm:text-sm text-stone-500 font-light mb-6">
                {selectedGift.revealContent.subheading}
              </p>

              {/* Romantic Quote in Box */}
              <div className="p-4 rounded-2xl bg-blush-50 border border-rose-100/80 text-wine-900 font-serif italic text-base sm:text-lg mb-6 leading-relaxed">
                {selectedGift.revealContent.quote}
              </div>

              {/* Bullet Details */}
              <div className="space-y-2.5 text-left mb-8">
                {selectedGift.revealContent.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              {selectedGift.iconType === 'letter' ? (
                <button
                  onClick={() => {
                    setSelectedGift(null);
                    onOpenLetter();
                  }}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-wine-800 to-rose-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Open the Full Love Letter &rarr;
                </button>
              ) : (
                <button
                  onClick={() => setSelectedGift(null)}
                  className="w-full py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all cursor-pointer"
                >
                  Keep this close to your heart 💗
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
