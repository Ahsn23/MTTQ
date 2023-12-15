const mqtt = require('mqtt');

const brokerOptions = {
  host: '127.0.0.1',
  port: 1883,
};

const client = mqtt.connect(brokerOptions);

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  client.subscribe('test_topic', (err) => {
    if (!err) {
      console.log('Subscribed to test_topic');
      
      client.publish('test_topic', 'Hello, MQTT!');
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

client.on('error', (err) => {
  console.error(`Error: ${err}`);
});

client.on('close', () => {
  console.log('Connection to MQTT broker closed');
});

client.on('offline', () => {
  console.log('MQTT client is offline');
});
