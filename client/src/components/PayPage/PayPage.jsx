import { Form, Input, Button, DatePicker } from 'antd';
import style from './paypage.module.css'



const PayPage = () => {

  const onFinish = (values) => {
    fetch('http://localhost:3001/transaction',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    // console.log('Success:', values);
  };
  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const dateFormat = 'MM/YYYY';
  const customFormat = value => `${value.format(dateFormat)}`;
  return (
    <div className={style.card}>
    <Form className={style.formTrans}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout="horizontal"
      initialValues={{
        // remember: true,
        size: 'small',
      }}
      size= {'small'}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Card Number"
        name="cardNum"
        rules={[
          {
            required: true,
            // type:'Phone Number',
            min: 16,
            max: 16,
            message: 'Please input your card number!',
          },
        ]}
        hasFeedback
      >
        <Input  type="number" Length={16}/>
      </Form.Item>

      <Form.Item
        label="Expiration Date"
        name="expiration"
        rules={[
          {
            required: true,
            message: 'Please input your expiration date!',
          },
        ]}
        hasFeedback

      >
        <DatePicker format={customFormat}  />
      </Form.Item>

      <Form.Item
        label="CVV"
        name="cvv"
        rules={[
          {
            required: true,
            min: 3,
            max: 3,
            message: 'Please input your CVV code!',
          },
        ]}
        hasFeedback

      >
        <Input type="number"/>
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            message: 'Please input your expiration date!',
          },
        ]}
        hasFeedback

      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Оплатить
        </Button>
      </Form.Item>
    </Form>
    </div>
  );



}

export default PayPage
