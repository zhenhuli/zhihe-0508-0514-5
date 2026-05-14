import React, { useState } from 'react';
import { Form, Button, Header, Segment } from 'semantic-ui-react';
import { TeaTastingRecord } from '../types';

interface TeaTastingFormProps {
  onSubmit: (record: Omit<TeaTastingRecord, 'id' | 'date'>) => void;
}

const teaTypeOptions = [
  { key: 'green', text: '绿茶', value: '绿茶' },
  { key: 'black', text: '红茶', value: '红茶' },
  { key: 'oolong', text: '乌龙茶', value: '乌龙茶' },
  { key: 'white', text: '白茶', value: '白茶' },
  { key: 'puer', text: '普洱茶', value: '普洱茶' },
  { key: 'yellow', text: '黄茶', value: '黄茶' },
  { key: 'other', text: '其他', value: '其他' },
];

const teaColorOptions = [
  { key: 'light-green', text: '浅绿', value: '浅绿' },
  { key: 'emerald', text: '翠绿', value: '翠绿' },
  { key: 'golden', text: '金黄', value: '金黄' },
  { key: 'orange', text: '橙红', value: '橙红' },
  { key: 'red', text: '红褐', value: '红褐' },
  { key: 'pale', text: '浅黄', value: '浅黄' },
];

const TeaTastingForm: React.FC<TeaTastingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    teaName: '',
    teaType: '',
    teaColor: '',
    aroma: 5,
    taste: 5,
    brewCount: 1,
    sweetness: 5,
    bitterness: 5,
    smoothness: 5,
  });

  const handleDropdownChange = (e: React.SyntheticEvent, { name, value }: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [name]: parseInt(e.target.value) });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      teaName: '',
      teaType: '',
      teaColor: '',
      aroma: 5,
      taste: 5,
      brewCount: 1,
      sweetness: 5,
      bitterness: 5,
      smoothness: 5,
    });
  };

  return (
    <Segment padded>
      <Header as="h2" dividing>
        茶叶品鉴录入
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="茶叶名称"
          name="teaName"
          placeholder="请输入茶叶名称"
          value={formData.teaName}
          onChange={handleInputChange}
          required
        />

        <Form.Dropdown
          label="茶种"
          name="teaType"
          selection
          options={teaTypeOptions}
          value={formData.teaType}
          onChange={handleDropdownChange}
          placeholder="选择茶种"
          required
        />

        <Form.Dropdown
          label="汤色"
          name="teaColor"
          selection
          options={teaColorOptions}
          value={formData.teaColor}
          onChange={handleDropdownChange}
          placeholder="选择汤色"
          required
        />

        <Form.Field>
          <label>香气 (1-10): {formData.aroma}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={formData.aroma}
            onChange={handleSliderChange('aroma')}
            style={{ width: '100%' }}
          />
        </Form.Field>

        <Form.Field>
          <label>口感 (1-10): {formData.taste}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={formData.taste}
            onChange={handleSliderChange('taste')}
            style={{ width: '100%' }}
          />
        </Form.Field>

        <Form.Field>
          <label>甜度 (1-10): {formData.sweetness}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={formData.sweetness}
            onChange={handleSliderChange('sweetness')}
            style={{ width: '100%' }}
          />
        </Form.Field>

        <Form.Field>
          <label>苦度 (1-10): {formData.bitterness}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={formData.bitterness}
            onChange={handleSliderChange('bitterness')}
            style={{ width: '100%' }}
          />
        </Form.Field>

        <Form.Field>
          <label>顺滑度 (1-10): {formData.smoothness}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={formData.smoothness}
            onChange={handleSliderChange('smoothness')}
            style={{ width: '100%' }}
          />
        </Form.Field>

        <Form.Input
          label="耐泡次数"
          name="brewCount"
          type="number"
          min="1"
          max="20"
          value={formData.brewCount}
          onChange={handleInputChange}
          required
        />

        <Button primary type="submit" fluid size="large">
          生成品鉴档案
        </Button>
      </Form>
    </Segment>
  );
};

export default TeaTastingForm;
