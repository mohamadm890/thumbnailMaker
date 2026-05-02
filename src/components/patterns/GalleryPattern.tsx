import { ReactNode } from "react";
import { Grid } from "../layout/Grid";

type Props = {
  header?: ReactNode;
  children: ReactNode;
};

export function GalleryPattern({ header, children }: Props) {
  return (
    <section style={{ padding: 12 }}>
      
      {header && (
        <div style={{ marginBottom: 12 }}>
          {header}
        </div>
      )}

      <Grid>
        {children}
      </Grid>

    </section>
  );
}