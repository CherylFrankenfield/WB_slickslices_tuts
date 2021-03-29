import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Build a custom sidebar 

export default function Sidebar() {
  return S.list()
    .title(`Slick's slices`)
    .items([
      // create a new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>icon</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // make a new document ID, so we dont' have a random string of numbers
            .documentId('downtown')
        ),
      // add in the rest of the document items
      ...S.documentTypeListItems().filter(
        item => item.getId() !== 'storeSettings'
      ),
  ]);
}