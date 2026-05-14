import React from 'react';
import { Header, Segment, Card, Button, Grid, Label, Icon } from 'semantic-ui-react';
import { TeaTastingRecord } from '../types';
import FlavorRadarChart from './FlavorRadarChart';

interface TeaRecordListProps {
  records: TeaTastingRecord[];
  onDelete: (id: string) => void;
}

const TeaRecordList: React.FC<TeaRecordListProps> = ({ records, onDelete }) => {
  if (records.length === 0) {
    return (
      <Segment placeholder>
        <Header icon>
          <Icon name="leaf" />
          暂无品鉴记录
        </Header>
        <p>请在左侧表单中录入品鉴信息</p>
      </Segment>
    );
  }

  return (
    <div>
      <Header as="h2" dividing>
        品鉴档案 ({records.length})
      </Header>
      <Card.Group itemsPerRow={1}>
        {records.map((record) => (
          <Card key={record.id} fluid>
            <Card.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Card.Header>
                      <Icon name="leaf" color="green" />
                      {record.teaName}
                    </Card.Header>
                    <Card.Meta>
                      {record.teaType} · {record.date}
                    </Card.Meta>
                    <Card.Description>
                      <Label color="teal">
                        汤色: {record.teaColor}
                      </Label>
                      <Label color="olive">
                        耐泡: {record.brewCount}次
                      </Label>
                      <div style={{ marginTop: '10px' }}>
                        <p><strong>香气:</strong> {record.aroma}/10</p>
                        <p><strong>口感:</strong> {record.taste}/10</p>
                        <p><strong>甜度:</strong> {record.sweetness}/10</p>
                        <p><strong>苦度:</strong> {record.bitterness}/10</p>
                        <p><strong>顺滑度:</strong> {record.smoothness}/10</p>
                      </div>
                    </Card.Description>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <FlavorRadarChart record={record} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
            <Card.Content extra>
              <Button
                color="red"
                icon
                labelPosition="left"
                onClick={() => onDelete(record.id)}
              >
                <Icon name="trash" />
                删除记录
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default TeaRecordList;
