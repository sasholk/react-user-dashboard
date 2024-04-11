import { LinkItem } from '../LinkItem';
import { LinkItemSocial } from '../LinkItemSocial';
import { LinkList } from '../LinkList';
import { policyLinks, prometheusLinks, prometheusPlusLinks, socialLinks } from './links';

export const Footer = () => {
  return (
    <footer id="site-footer">
      <div className="row">
        <div className="col">
          <h5 className="widget-title">Prometheus</h5>

          <LinkList links={prometheusLinks} gap={2} LinkComponent={LinkItem} />
        </div>
        <div className="col">
          <h5 className="widget-title">Prometheus+</h5>

          <LinkList links={prometheusPlusLinks} gap={2} LinkComponent={LinkItem} />
        </div>

        <div className="col">
          <h5 className="widget-title">Мобільні застосунки</h5>

          <ul className="list-unstyled">
            <li className="mb-3">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=org.prometheus.android"
                rel="noopener"
              >
                <img src="./google-play.svg" alt="google-play-app" width={134} />
              </a>
            </li>

            <li className="mb-3">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/prometheus-online-courses/id1213523151"
                rel="noopener"
              >
                <img src="./app-store.svg" alt="app-store-app" width={134} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 d-flex flex-column flex-md-row gap-5">
          <LinkItem href="https://prometheus.org.ua/" text="© 2024 Prometheus" />

          <LinkList links={policyLinks} gap={5} LinkComponent={LinkItem} />
        </div>

        <div className="col-12 col-md-4">
          <LinkList links={socialLinks} gap={2} LinkComponent={LinkItemSocial} flexDirection={'row'} />
        </div>
      </div>
    </footer>
  );
}