import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: process.env.AWS_ACCESS_KEY_ID ? {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  } : undefined,
});

export const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

const TABLE_NAME = process.env.DYNAMODB_SUBSCRIBERS_TABLE || 'chirpy-studio-subscribers';

export interface Subscriber {
  email: string;
  subscribedAt: string;
  source: string;
  ipAddress?: string;
}

export async function addSubscriber(subscriber: Subscriber): Promise<void> {
  await docClient.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: subscriber,
      ConditionExpression: 'attribute_not_exists(email)',
    })
  );
}

export async function getSubscriber(email: string): Promise<Subscriber | null> {
  const result = await docClient.send(
    new GetCommand({
      TableName: TABLE_NAME,
      Key: { email },
    })
  );
  return (result.Item as Subscriber) || null;
}

export async function subscriberExists(email: string): Promise<boolean> {
  const subscriber = await getSubscriber(email);
  return subscriber !== null;
}
