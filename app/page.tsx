import React from "react";
import CategoryList from "./_ui/CategoryList";
import { categories } from "./_lib/data";
import { BsTelephone } from "react-icons/bs";
import { phone } from "./_lib/constants";
import Image from "next/image";
import OptimizedImage from "./_ui/OptimizedImage";

const page = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              سفارش کیک و شیرینی تازه در قم | سفارش عمده و جزئی با قیمت مناسب
            </h1>
            <p className="hero-description">
              🎂 <strong>سفارش کیک تازه در قم</strong> | 🍰
              <strong>سفارش شیرینی تازه در قم</strong>| ✅ پخت روز و تازه‌ترین
              مواد | 💰 قیمت مناسب و مستقیم | 🌟 بهترین کیفیت | 📞 قبول سفارشات
              عمده و مجالس
            </p>
            <a
              href={`tel:${phone}`}
              className="btn btn--full inline-flex! items-center gap-3"
            >
              <span>سفارش کیک و شیرینی</span>
              <BsTelephone />
            </a>
          </div>
          <div className="hero-img-box">
            <picture>
              <OptimizedImage
                width={0}
                height={0}
                src="/img/hero.png"
                className="hero-img"
                alt="کیک و شیرینی هایی که روی میز هستند"
              />
              {/* <Image
                width={0}
                height={0}
                sizes="100vm"
                src="/img/hero.png"
                quality={80}
                className="hero-img"
                alt="کیک و شیرینی هایی که روی میز هستند"
              /> */}
            </picture>
          </div>
        </div>
      </section>

      <section className="section-categories" id="categories">
        <div className="container text-center">
          <span className="subheading">سفارش آنلاین در قم</span>
          <h2 className="heading-secondary">
            سفارش کیک و شیرینی تازه در قم با قیمت مناسب
          </h2>
        </div>

        <div className="container grid grid--3-cols mb-md">
          <CategoryList items={categories} />
        </div>
      </section>
    </main>
  );
};

export default page;
