import { useState } from "react";

function LogoTitle() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Enable Notifications
      </label>
    </div>
  );
}

export default LogoTitle;
