Trung Phương Daily Homeworks AliBles ( 16/04/2021)

câu1 :  Giả sử trong 1 thư mục có tên Buoi2 có 2 file mới tạo lần lượt là bai1.txt và bai2.txt. 
Có những cách nào đã học trong buổi 1 để chuyển trạng thái 2 file mới từ Untrachked file (báo màu đỏ) sang Staged (Xanh lá)? *
Đầu tiên sẽ dử dụng git status hoặc git diff để kiểm tra file đã được track  chưa.
Nếu chưa thì ta  
Cách 1: sử dụng git add . để convert tất cả các file từ trạng thái Untracked sang Tracked 
Cách 2: sử dụng git add <tên file cụ thể> để convert 1 file cụ thể file từ trạng thái Untracked sang Tracked 

 Câu 2: Hãy phân biệt Tracked file và Untracked file trong git? *

Untracked file: là tất cả những gì có trong thư viên làm việc của bản (word directory) ,  nó không được lưu vào vùng StageArea ở lần lưu (snapshot) cuối cùng 
Tracked file:   tập tin đã được đánh dấu theo dõi trong Git để bạn làm việc với nó 
Trạng thái Tracked nó sẽ có thêm các trạng thái phụ khác là Unmodified (chưa chỉnh sửa gì), Modified (đã chỉnh sửa) và Staged (đã sẵn sàng để commit).
Khi git clone 1 repository  thì các file đều được tracked
Dể thay đổi trang thái từ tracked > untracked sử dụng : git rm <ten file > 
ngược lại : git add <ten file > 

Câu  3: Hãy nêu ý nghĩa 3 trạng thái của file trong git (3 stages in git). Các lệnh sử dụng trong Git để chuyển các trạng thái?
Modified:  Kho lưu trữ từ xa là bản sao cục bộ (bản sao bạn tạo trên máy cục bộ của mình) của dự án gốc đang được duy trì qua Git.  
Vì vậy, về cơ bản bạn có thể thực hiện các thay đổi đối với bản sao dự án của mình mà không cản trở mã gốc. 
Điều này được gọi là Sửa đổi, tức là thực hiện một số bổ sung cho dự án ban đầu.
Staged: Là bạn đã đánh dấu sẽ commit phiên bản hiện tại của một tập tin đã chỉnh sửa trong lần commit sắp tới.  Sẵn sàng để được đưa lên git 
Trạng thái này xảy ra khi bạn sử dụng lệnh git add <file_name> nhưng chưa commit. 
Commit: cam kết. Như việc ký tên chứng minh bạn đã làm gì với file này 
Tông quan quá trình này  giống như việc chay đua gồm ba phần (Chuẩn bị , sẵn sàng và  chạy )

