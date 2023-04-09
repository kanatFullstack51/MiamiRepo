import React from 'react';
import cls from './DiveIn.module.scss';
import palms from '../../assets/diveIn/Rectangle.png'
import questions from '../../assets/diveIn/стекло.svg';
import map from '../../assets/diveIn/Rectangle2.png';
import miami from '../../assets/diveIn/miami.svg';
import aboutompanies from '../../assets/diveIn/aboutCompanies.svg'
import social from '../../assets/diveIn/social.svg'
import insta from '../../assets/diveIn/cib_instagram.svg'
import tg from '../../assets/diveIn/simple-icons_telegram.svg';
import face from '../../assets/diveIn/brandico_facebook-rect.svg'
import { Form, Input, Button, notification } from 'antd';
// import { Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { InfoMap } from '@/components/InfoMiamiMap/InfoMap';
import { useForm } from 'antd/es/form/Form';
const InfoContent1 = () => {
  return (
    <div className={cls['wrapper']}>
      <div className={cls['miamiBlock']}>
        <h3 style={{ fontSize: '64px', color: '#A2765E' }}>Окунись в мир </h3>
        <h2 style={{ fontSize: '96px', color: '#A2765E', marginTop: '3%' }}>MIAMI</h2>
        <p className={cls['content']}> Это видео позволит прочувствовать настроение Miami,
          ведь это отличное место для шопинга.

        </p>  <p className={cls['content']}> Вы можете из дома шопиться в MIAMI.
          А мы с радостью поможем в этом.
        </p>
      </div>
      <div className={cls['videoBlock']}>
        <img src={palms} alt="" width={'410px'} height={'623px'} />
      </div>
    </div>
  )
}

const InfoContent2 = () => {
  const [form] = useForm()
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    form.resetFields();
    notification.success({
      message:'Ваш запрос был успешно отправлен!'
    })
    
  };
  return (
    <div className={cls['questions']}>
      <div className={cls['innerWrapper']}>
        <div className={cls['question']}>
          <h3>Есть вопросы?</h3>
          <h3>Ответим с удовольствием</h3>
        </div>
        <div className={cls['form']}>
          <Form onFinish={onFinish} form={form}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
            >
              <Input placeholder="Имя" style={{ width: "100%", opacity: 0.8, fontSize:'17px' }} />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, type: 'email', message: 'Пожалуйста, введите корректный email' }]}
            >
              <Input placeholder="Email" style={{ width: "100%", opacity: 0.8, fontSize:'17px' }} />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Пожалуйста, введите ваш номер телефона' }]}
            >
              <Input placeholder="Телефон" style={{ width: "100%", opacity: 0.8, fontSize:'17px' }} />
            </Form.Item>
            <Form.Item
              name="question"
              rules={[{ required: true, message: 'Пожалуйста, введите ваш вопрос' }]}
            >
              <Input.TextArea placeholder="Ваш вопрос" rows={4} style={{ width: "100%", opacity: 0.8, fontSize:'17px' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ background: '#A2765E', width: '230px', height: '52px' }}>
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};



const Footer = () => {
  return (
    <div className={cls['footer']} id='contacts'>
      <div className="">
        <img src={miami} alt="" />
      </div>
      <div className={cls['advantages']}>
        <a href="">  <p>Преимущества</p></a>
        <a href="">  <p>LookBook</p></a>
        <a href="">  <p>O нас</p></a>
        <a href="">  <p>Карта</p></a>
        <a href="">  <p>Реквизиты</p></a>
        <a href="">  <p>Политика возвратов</p></a>
        <a href="">  <p>Информация об оплаты
          картой и безопасность</p></a>
      </div>
      <div style={{ marginTop: '3%' }}>
        <p style={{ fontSize: '20px' }}>Наши социальные сети
        </p>
        <div className={cls['social']}>
          <a href="
                    https://www.instagram.com/miamiwithari/?igshid=YmMyMTA2M2Y=
                    "><img src={insta} alt="" /></a>
          <a href="https://t.me/aarinakk"><img src={tg} alt="" /></a>
          <a href=""><img src={face} alt="" /></a>
        </div>
      </div>
    </div>
  )
}
export const DiveIn = () => {
  return (
    <><InfoContent1 /><InfoContent2 /> <InfoMap /> <Footer /></>
  );
};
