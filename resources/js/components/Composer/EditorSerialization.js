import React from 'react';

export const rules = [
    {
      deserialize(el, next) {
        if (el.tagName.toLowerCase() == 'p') {
          return {
            object: 'block',
            type: 'paragraph',
            data: {
              className: el.getAttribute('class'),
            },
            nodes: next(el.childNodes),
          }
        }
      },
      // Add a serializing function property to our rule...
      serialize(obj, children) {
        if (obj.object == 'block' && obj.type == 'paragraph') {
          return <p className={obj.data.get('className')}>{children}</p>
        }
      },
    },
  ]