import { MONTH_NAMES_SHORT } from '../../../utils/monthNamesShort';

import React, { memo } from 'react';

export const HeaderRow = memo(({ availableMonths }) => (
  <thead>
    <tr>
      <th className="number">no.</th>
      <th className="email">email</th>
      <th className="no-trans">no. trans.</th>
      {availableMonths.map((month) => (
        <th className="month" key={month}>
          {MONTH_NAMES_SHORT[month]}
        </th>
      ))}
      <th className="total">total points</th>
    </tr>
  </thead>
));

HeaderRow.displayName = 'HeaderRow';
