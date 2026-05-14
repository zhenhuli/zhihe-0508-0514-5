import React, { useState } from 'react';
import { Container, Header, Grid, Message, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import TeaTastingForm from './components/TeaTastingForm';
import TeaRecordList from './components/TeaRecordList';
import { TeaTastingRecord } from './types';

function App() {
  const [records, setRecords] = useState<TeaTastingRecord[]>([]);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleAddRecord = (data: Omit<TeaTastingRecord, 'id' | 'date'>) => {
    const newRecord: TeaTastingRecord = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setRecords([newRecord, ...records]);
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000);
  };

  const handleDeleteRecord = (id: string) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <Container style={{ padding: '20px 0' }}>
      <Header as="h1" icon textAlign="center" style={{ marginBottom: '30px' }}>
        <Icon name="leaf" circular color="green" />
        <Header.Content>
          茶叶品鉴记录系统
          <Header.Subheader>记录每一款茶的风味特点</Header.Subheader>
        </Header.Content>
      </Header>

      {successMessage && (
        <Message success icon>
          <Icon name="check circle" />
          <Message.Content>
            <Message.Header>品鉴档案已生成</Message.Header>
            您的茶叶品鉴记录已保存成功！
          </Message.Content>
        </Message>
      )}

      <Grid stackable>
        <Grid.Column width={6}>
          <TeaTastingForm onSubmit={handleAddRecord} />
        </Grid.Column>
        <Grid.Column width={10}>
          <TeaRecordList records={records} onDelete={handleDeleteRecord} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
