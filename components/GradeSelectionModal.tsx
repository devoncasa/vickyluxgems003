import React from 'react';
import { AmberColorDetail, Grade } from '../types';
import { CloseIcon } from './IconComponents';
import { useLanguage } from '../i18n/LanguageContext';

interface GradeSelectionModalProps {
  amberColor: AmberColorDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectGrade: (grade: Grade) => void;
}

const GradeSelectionModal: React.FC<GradeSelectionModalProps> = ({ isOpen, amberColor, onClose, onSelectGrade }) => {
  const { t } = useLanguage();
  if (!isOpen || !amberColor) return null;

  const grades: { name: Grade; description: string; price: string }[] = [
    { name: 'Standard', description: t('grade_standard_desc'), price: t('grade_standard_price') },
    { name: 'Silver', description: t('grade_silver_desc'), price: t('grade_silver_price') },
    { name: 'High', description: t('grade_high_desc'), price: t('grade_high_price') },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-[var(--c-surface)] rounded-xl shadow-2xl w-full max-w-lg overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">{t('grade_modal_title')}</h2>
          <h3 className="text-xl font-semibold text-center text-[var(--c-accent-primary)] mb-4">{t(`amber_color_${amberColor.id}_name` as any)}</h3>
          <img src={amberColor.imageUrl} alt={t(`amber_color_${amberColor.id}_name` as any)} className="w-full h-40 object-cover rounded-lg mb-6"/>
          <div className="space-y-3">
            {grades.map((grade) => (
              <button
                key={grade.name}
                onClick={() => onSelectGrade(grade.name)}
                className="w-full text-left p-4 rounded-lg border-2 border-[var(--c-border)] hover:border-[var(--c-accent-primary)] hover:bg-[var(--c-accent-primary)]/10 transition-all flex items-center group"
              >
                <div className="flex-grow">
                  <p className="font-bold text-lg group-hover:text-[var(--c-accent-primary)]">{grade.name} Grade</p>
                  <p className="text-sm text-[var(--c-text-secondary)]">{grade.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[var(--c-text-primary)]">{grade.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-500 hover:text-stone-800 transition-colors rounded-full p-1 hover:bg-stone-100">
          <CloseIcon className="h-6 w-6"/>
        </button>
      </div>
    </div>
  );
};

export default GradeSelectionModal;