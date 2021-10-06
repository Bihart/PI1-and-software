import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div class="inline-flex space-x-4">
        <ul>
          <li class="flex-1 shadow-sm">Home</li>
          <li class="flex-1 shadow-lg">Info</li>
        </ul>
      </div>
    );
  }
}

export { NavBar };
