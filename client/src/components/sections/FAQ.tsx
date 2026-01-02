import { useI18n } from '@/lib/i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const { t } = useI18n();

  const questions = [
    { id: 'q1', question: t('faq.q1'), answer: t('faq.a1') },
    { id: 'q2', question: t('faq.q2'), answer: t('faq.a2') },
    { id: 'q3', question: t('faq.q3'), answer: t('faq.a3') },
    { id: 'q4', question: t('faq.q4'), answer: t('faq.a4') },
    { id: 'q5', question: t('faq.q5'), answer: t('faq.a5') },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('faq.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
