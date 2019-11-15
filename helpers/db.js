import * as SQLite from 'expo-sqlite';

// Connect or create DB
const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `
          CREATE TABLE IF NOT EXISTS places (
              id INTEGER PRIMARY KEY NOT NULL, 
              title TEXT NOT NULL, 
              imageUri TEXT NOT NULL, 
              address TEXT NOT NULL,
              lat REAL NOT NULL,
              lon REAL NOT NULL
          );
        `,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertPlace = (title, imageUri, address, lat, lon) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `
          INSERT INTO places (title, imageUri, address, lat, lon)
          VALUES (?, ?, ?, ?, ?);
        `,
        [title, imageUri, address, lat, lon],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
