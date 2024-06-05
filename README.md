## Çoklu Renderlama

- Birden fazla elemanı ekrana basmak istediğimiz zaman kullanırız.

- Bir dizi içerisindeki eleman sayısı kadar ekrana basma işlemi yapmak istiyorsak map yöntemi kullanırız.

## State'in Ortaya Çıkması

- React uygulamarlında bileşen içerisinde kullanıcı etlişimi sonucu arayüzde değişim olmasını isteyebiliriz.Örneğin bir butona tıklandığında tema değişimi

## State

- Bileşen içerisinde verileri saklamaya ve yönetmeye yarar.

- useState(x): useState'i kullanırken x yazılan yere `initial state` denir.Başlangıç değeri statein bileşen ekrana basıldığı ilk anda sahip olduğu değerdir.

- useState ile tutulan bir değeri değiştirmenin tek yolu useState'in dönderdiği setter fonksiyonu kullanmaktır.

## Component

- React'ta iki çeşit component bulunur.

- - 1.Class Component:

- Function componentler ortaya çıkmadan önce kullanılırdı.
- Modern projelerde yerini funcitona bıraktılar.
- Hooks kullanımı mevcut değildir.
- Lifecycle methodları içerisinde bulunur.

- - 2.Function Component:

- Modern projelerde classlar fazla kod alanı kapladığından classın sahip olduğu state,lifecycle vb. özelliklere sahip olmamasına rağmen react hookları sayesinde classların bütün özelliklerini fonksiyonlarda edindiler ve daha az kod alanı kapladığı ve daha okunabilir olduğu için react projesine başlandığı zaman her koşulda ilk tercihimiz olacaktır.

## Lifecycle(Yaşam Döngüsü)

- React bileşenleride normal bir canlı gibi yaşam döngüsüne sahiptir.Bu döngü 3 aşamadan oluşur:

1. Doğma >> Mount (Ekrana Basılma) - componentDidMount()

2. Gelişme >> Update (Güncellenme) - componentDidUpdate()

3. Ölme >> UnMount (Ekrandan Gitme) - componentWillUnMount()

- Bileşen ekrana basıldığı ilk anda, bileşen her güncellendiği sırada veya bileşen ekrandan kaldırılırken bu olayları izleyip fonksiyonlar çalıştırmak istenilebilir.

## Not

- Classların sahip olduğu ama functionların sahip olmadığı özellikler için functionlarda bu özellikler kullanılabilmesi için react hooks kullanılır.

## useEffect

- Amacı: Classlardaki componentDidMount & componentDidUpdate & componentWillUnMount yerine function componenetlerde useEffect kullanılır.

- Fonksiyonel bileşenlerde yaşam döngüsünü izlememizi sağlar.

## Kullanımlar

1. ComponentDidMount:Bileşenin ekrana gelme olayını izlemeye yarar.

- - 1.parametre >> Çalışacak olan callback function
- - 2.parametre >> Boş bir bağımlılık diziisi
- - `useEffect(()=>{},[])`

2. ComponentWillUnMount:Bileşenin ekrandan gitme olayını izlemeye yarar.

- - 1.parametre >> Çalışacak olan callback function
- - 2.parametre >> Boş bir bağımlılık diziisi
- - Çalışacak olan fonksiyonun return satırana bir fonksiyon daha yazarız ve bu yazdığımız fonksiyon bileşen ekrandan gidince çalışır.
- - `useEffect(()=>{ return ()=>{} },[])`

3. ComponentDidUpdate:Bileşen gelen prop veya state her değiştiğinde yani bileşen her render olduğunda çalışan yöntemdir.

- - 1.parametre >> Çalışacak olan callback function
- - 2.parametre yok
- - `useEffect(()=>{})`

4. ComponentDidUpdate-2:`Belirlediğimiz` state veya props her değiştiğinde çalışır.

- - 1.parametre >> Çalışacak olan callback function
- - 2.parametre >> Dolu bağımlılık dizisi
- - `useEffect(()=>{},[page,name])`
# 10-hi-react
