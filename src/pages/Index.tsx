import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* <header> - навигационная шапка сайта */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        {/* <nav> - основная навигация */}
        <nav className="container mx-auto px-4 py-4">
          {/* <div className="flex"> - flexbox контейнер для горизонтального размещения */}
          <div className="flex items-center justify-between">
            {/* <h1> - главный заголовок (логотип) */}
            <h1 className="text-2xl font-bold text-primary">МедКлиника</h1>
            
            {/* <ul> - неупорядоченный список пунктов меню */}
            <ul className="hidden md:flex space-x-8">
              {/* <li> - элемент списка */}
              <li>
                {/* <button> - кнопка для навигации с обработчиком onClick */}
                <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">
                  Услуги
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('specialists')} className="text-gray-700 hover:text-primary transition-colors">
                  Специалисты
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-primary transition-colors">
                  Вопросы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">
                  Контакты
                </button>
              </li>
            </ul>
            
            {/* Button компонент с иконкой для призыва к действию */}
            <Button onClick={() => scrollToSection('appointment')} className="hidden md:flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      {/* <main> - основной контент страницы */}
      <main className="pt-16">
        {/* <section> - секция Hero (главный экран) */}
        <section id="hero" className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32 animate-fade-in">
          <div className="container mx-auto px-4">
            {/* Grid система для адаптивной верстки */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* <h2> - заголовок второго уровня */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Ваше здоровье — наш приоритет
                </h2>
                {/* <p> - параграф текста */}
                <p className="text-lg text-gray-600 mb-8">
                  Современная медицинская помощь с заботой о каждом пациенте. Квалифицированные специалисты и передовое оборудование.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('appointment')} className="gap-2">
                    <Icon name="Calendar" size={20} />
                    Записаться на приём
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="gap-2">
                    <Icon name="Info" size={20} />
                    Узнать больше
                  </Button>
                </div>
              </div>
              {/* <img> - изображение с атрибутами src (источник) и alt (альтернативный текст) */}
              <div className="hidden md:block">
                <img 
                  src="https://cdn.poehali.dev/projects/9572dab6-c211-4367-a429-98e7cf781526/files/d561c65e-d443-4ce8-86fa-8d701668cabf.jpg" 
                  alt="Современная медицинская клиника"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Секция Услуги */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Полный спектр медицинских услуг для вашего здоровья и благополучия
              </p>
            </div>

            {/* Grid с карточками услуг */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card компонент из библиотеки UI */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Stethoscope" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Консультация терапевта</CardTitle>
                  <CardDescription>Первичный осмотр и диагностика заболеваний</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Профессиональная консультация опытных врачей-терапевтов с использованием современного оборудования.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Activity" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Диагностика</CardTitle>
                  <CardDescription>УЗИ, ЭКГ, лабораторные анализы</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Полный комплекс диагностических процедур для точного определения состояния здоровья.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Кардиология</CardTitle>
                  <CardDescription>Диагностика и лечение сердечно-сосудистых заболеваний</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Специализированная помощь при заболеваниях сердца и сосудов от опытных кардиологов.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Brain" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Неврология</CardTitle>
                  <CardDescription>Лечение заболеваний нервной системы</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Диагностика и лечение неврологических заболеваний с применением современных методик.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Эндокринология</CardTitle>
                  <CardDescription>Лечение гормональных нарушений</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Квалифицированная помощь при заболеваниях эндокринной системы и обмена веществ.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Профилактика</CardTitle>
                  <CardDescription>Программы здоровья и вакцинация</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Комплексные программы профилактических осмотров и иммунизации для всей семьи.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Секция Специалисты */}
        <section id="specialists" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши специалисты</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Команда высококвалифицированных врачей с многолетним опытом
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src="https://cdn.poehali.dev/projects/9572dab6-c211-4367-a429-98e7cf781526/files/322d2c8a-ca2e-448f-95e3-e504593c8aa8.jpg"
                    alt="Доктор Иванова Елена"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>Иванова Елена Петровна</CardTitle>
                  <CardDescription>Врач-терапевт высшей категории</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">Опыт работы: 15 лет</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Терапия</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Диагностика</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src="https://cdn.poehali.dev/projects/9572dab6-c211-4367-a429-98e7cf781526/files/322d2c8a-ca2e-448f-95e3-e504593c8aa8.jpg"
                    alt="Доктор Смирнов Андрей"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>Смирнов Андрей Сергеевич</CardTitle>
                  <CardDescription>Врач-кардиолог, кандидат медицинских наук</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">Опыт работы: 20 лет</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Кардиология</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">ЭКГ</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src="https://cdn.poehali.dev/projects/9572dab6-c211-4367-a429-98e7cf781526/files/322d2c8a-ca2e-448f-95e3-e504593c8aa8.jpg"
                    alt="Доктор Петрова Мария"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>Петрова Мария Викторовна</CardTitle>
                  <CardDescription>Врач-невролог</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">Опыт работы: 12 лет</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Неврология</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Мануальная терапия</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Секция Записаться */}
        <section id="appointment" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Записаться на приём</h2>
                <p className="text-gray-600">
                  Заполните форму, и мы свяжемся с вами для подтверждения записи
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  {/* <form> - форма с обработчиком onSubmit */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* <div> - контейнер для группировки элементов */}
                    <div className="space-y-2">
                      {/* Label компонент с атрибутом htmlFor для связи с input */}
                      <Label htmlFor="name">Ваше имя *</Label>
                      {/* Input компонент с обработчиком onChange и значением value из state */}
                      <Input
                        id="name"
                        type="text"
                        placeholder="Иван Иванов"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@mail.ru"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Комментарий</Label>
                      {/* Textarea для многострочного текста */}
                      <Textarea
                        id="message"
                        placeholder="Опишите ваши симптомы или причину обращения"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    {/* Button с типом submit для отправки формы */}
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Секция FAQ (Вопросы и ответы) */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
                <p className="text-gray-600">
                  Ответы на самые популярные вопросы наших пациентов
                </p>
              </div>

              {/* Accordion компонент для раскрывающихся блоков */}
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-none shadow-sm">
                  {/* AccordionTrigger - заголовок который можно нажать */}
                  <AccordionTrigger className="text-left hover:no-underline">
                    Как записаться на приём?
                  </AccordionTrigger>
                  {/* AccordionContent - содержимое которое раскрывается */}
                  <AccordionContent className="text-gray-600">
                    Вы можете записаться на приём через форму на сайте, по телефону или лично в регистратуре клиники. 
                    Мы работаем ежедневно с 8:00 до 20:00.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Какие документы нужны для приёма?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Для первичного приёма необходимы паспорт и полис ОМС (если есть). Если у вас есть результаты 
                    предыдущих обследований, возьмите их с собой.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Сколько стоит первичная консультация?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Стоимость первичной консультации терапевта составляет 2000 рублей. Консультации узких специалистов 
                    от 2500 рублей. Точные цены уточняйте по телефону.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Работаете ли вы по ОМС?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Да, наша клиника работает по системе обязательного медицинского страхования. Ряд услуг доступен 
                    бесплатно по полису ОМС.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Можно ли вызвать врача на дом?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Да, мы предоставляем услугу вызова врача на дом. Стоимость выезда зависит от района и времени суток. 
                    Для вызова звоните по телефону регистратуры.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Секция Контакты */}
        <section id="contacts" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
              <p className="text-gray-600">
                Мы всегда рады помочь вам
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={28} className="text-primary" />
                  </div>
                  <CardTitle>Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    г. Москва, ул. Примерная, д. 123<br />
                    ТЦ "Здоровье", 2 этаж
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    +7 (495) 123-45-67<br />
                    Ежедневно с 8:00 до 20:00
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={28} className="text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    info@medclinic.ru<br />
                    support@medclinic.ru
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* <footer> - подвал сайта */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">МедКлиника</h3>
              <p className="text-gray-400">
                Профессиональная медицинская помощь для вас и ваших близких
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              {/* <ul> список с пунктами навигации */}
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('specialists')} className="hover:text-white transition-colors">Специалисты</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">Вопросы</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@medclinic.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Понедельник - Пятница: 8:00 - 20:00</li>
                <li>Суббота: 9:00 - 18:00</li>
                <li>Воскресенье: 9:00 - 15:00</li>
              </ul>
            </div>
          </div>
          
          {/* <hr> - горизонтальная линия */}
          <hr className="my-8 border-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 МедКлиника. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
