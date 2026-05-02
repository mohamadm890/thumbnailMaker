type Props = {
    colSpan: number;
    colStart?: number;
    children: React.ReactNode;
  };
  
  export function GridItem({ colSpan, colStart , children }: Props) {
    return (
      <div
      style={{
        gridColumn: colStart
          ? `${colStart} / span ${colSpan}`
          : `span ${colSpan}`, // 👈 key fix
      }}
      >
        {children}
      </div>
    );
  }