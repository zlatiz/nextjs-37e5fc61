export default function Footer(): JSX.Element {
  return (
    <footer style={{ borderTop: '1px solid #eaeef3', marginTop: 40, paddingTop: 20 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>© Copyright 2015 by <strong>Garber Bros, Inc.</strong>. All Rights Reserved.</div>
        <div style={{ color: '#777777', textAlign: 'right' }}>
          <a className="small-link" href="/transparency-in-coverage">Transparency in Coverage</a>
        </div>
      </div>
    </footer>
  );
}
